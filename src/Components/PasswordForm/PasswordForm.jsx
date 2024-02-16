// import React, { useState } from 'react';

// const PasswordForm = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'currentPassword') {
//       setCurrentPassword(value);
//     } else if (name === 'newPassword') {
//       setNewPassword(value);
//     } else if (name === 'confirmPassword') {
//       setConfirmPassword(value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Перевірка, чи новий пароль співпадає з підтвердженням
//     if (newPassword !== confirmPassword) {
//       setMessage('Паролі не співпадають');
//       return;
//     }

//     // Тут ви можете використовувати ваш логіку для зміни паролю, наприклад, виклик API

//     // Очищення полів та виведення повідомлення про успішну зміну паролю
//     setCurrentPassword('');
//     setNewPassword('');
//     setConfirmPassword('');
//     setMessage('Пароль змінено успішно');
//   };

//   return (
//     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
//       <p>Зміна паролю</p>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="currentPassword">Поточний пароль:</label>
//           <input
//             type="password"
//             id="currentPassword"
//             name="currentPassword"
//             value={currentPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="newPassword">Новий пароль:</label>
//           <input
//             type="password"
//             id="newPassword"
//             name="newPassword"
//             value={newPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Підтвердження нового паролю:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Змінити пароль</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default PasswordForm;
