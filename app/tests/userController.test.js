const User = require('../models/User');

describe('User Model Test Suite', () => {
  it('debería crear un usuario correctamente', async () => {
    const user = new User({ name: 'David', email: 'david@example.com' });
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe('David');
    expect(savedUser.email).toBe('david@example.com');
  });

  it('debería fallar al guardar sin campo requerido (email)', async () => {
    const user = new User({ name: 'David' });

    let err;
    try {
      await user.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.errors.email).toBeDefined();
  });

  it('debería fallar si el email no es único', async () => {
    const user1 = new User({ name: 'User1', email: 'same@example.com' });
    const user2 = new User({ name: 'User2', email: 'same@example.com' });

    await user1.save();

    let err;
    try {
      await user2.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.code).toBe(11000); // Código de error por índice único duplicado
  });
});