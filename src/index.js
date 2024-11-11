import readline from 'node:readline';
import { addOneContact } from './scripts/addOneContact.js';
import { countContacts } from './scripts/countContacts.js';
import { generateContacts } from './scripts/generateContacts.js';
import { getAllContacts } from './scripts/getAllContacts.js';
import { removeAllContacts } from './scripts/removeAllContacts.js';
import { removeLastContact } from './scripts/removeLastContact.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  console.log('\n1. Додати один контакт');
  console.log('2. Згенерувати контакти');
  console.log('3. Показати всі контакти');
  console.log('4. Порахувати кількість контактів');
  console.log('5. Видалити всі контакти');
  console.log('6. Видалити останній контакт');
  console.log('Виберіть операцію, ввівши відповідне число:\n');

  rl.question('Ваш вибір: ', async (answer) => {
    const operation = parseInt(answer);
    switch (operation) {
      case 1: {
        await addOneContact();
        console.log('Один контакт додано.');
        break;
      }
      case 2: {
        const number = await new Promise((resolve) => {
          rl.question('Скільки контактів згенерувати? ', (num) =>
            resolve(parseInt(num)),
          );
        });
        await generateContacts(number);
        console.log(`${number} контактів згенеровано.`);
        break;
      }
      case 3: {
        const contacts = await getAllContacts();
        console.log('Всі контакти:', contacts);
        break;
      }
      case 4: {
        const count = await countContacts();
        console.log(`Кількість контактів: ${count}`);
        break;
      }
      case 5: {
        await removeAllContacts();
        console.log('Усі контакти видалено.');
        break;
      }
      case 6: {
        await removeLastContact();
        console.log('Останній контакт видалено.');
        break;
      }
      default:
        console.log('Невірний вибір операції.');
    }

    rl.question('\nВиконати іншу операцію? (y/n): ', (repeat) => {
      if (repeat.toLowerCase() === 'y') {
        main();
      } else {
        rl.close();
        console.log('Програма завершена.');
      }
    });
  });
};

main();
