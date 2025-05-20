import { getAuth } from 'firebase/auth';
import * as firebaseAuth from 'firebase/auth'; 

//Con esto conseguimos mockear los metodos para no hacer llamadas reales  a firebase
jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
  };
});

describe('VoluntariosService Firebase Auth', () => {
  const mockUser = { user: { email: 'test@gmail.com', uid: '123' } };

  beforeEach(() => {
    // Limpiar los mocks antes de cada test
    jest.clearAllMocks();
  });

  it('Registro exitoso', async () => {
    (firebaseAuth.createUserWithEmailAndPassword as jest.Mock).mockResolvedValue(mockUser); //aqui se simula la respuesta devolviendo mockuser

    const email = 'test@gmail.com';
    const password = '123456';
    const auth = getAuth();

    const result = await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);

    expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
    expect(result.user.email).toBe(email);
  });

  it('Login exitoso', async () => {
    (firebaseAuth.signInWithEmailAndPassword as jest.Mock).mockResolvedValue(mockUser);

    const email = 'test@gmail.com';
    const password = '123456';
    const auth = getAuth();

    const result = await firebaseAuth.signInWithEmailAndPassword(auth, email, password);

    expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
    expect(result.user.email).toBe(email);
  });

  it('Error en registro', async () => {
    const fakeError = new Error('Correo incorrecto');
    (firebaseAuth.createUserWithEmailAndPassword as jest.Mock).mockRejectedValue(fakeError); //forzamos el metodo para que deuelva error

    const email = 'correo_mal';
    const password = '123';

    try {
      await firebaseAuth.createUserWithEmailAndPassword(getAuth(), email, password);
      // Si llega aquí el test debería fallar
      fail('La promesa debería haber fallado');
    } catch (error) {
      expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), email, password);
      expect(error).toBe(fakeError);
    }
  });

  it('Error en login', async () => {
    const fakeError = new Error('Contraseña incorrecta');
    (firebaseAuth.signInWithEmailAndPassword as jest.Mock).mockRejectedValue(fakeError);

    const email = 'test@gmail.com';
    const password = 'contraseña_mal';

    try {
      await firebaseAuth.signInWithEmailAndPassword(getAuth(), email, password);
      fail('La promesa debería haber fallado');
    } catch (error) {
      expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), email, password);
      expect(error).toBe(fakeError);
    }
  });
});
