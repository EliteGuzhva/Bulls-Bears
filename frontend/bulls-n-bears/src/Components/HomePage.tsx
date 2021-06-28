import React from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core';

const aboutText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio aliquam vel expedita fugit error aspernatur debitis officia harum, enim, nemo nesciunt? Voluptatem rerum ipsum fuga ipsam? Quasi laudantium voluptates vel ipsum facere optio nobis quo consequuntur accusamus eum tenetur sequi debitis dolores praesentium ducimus dicta nesciunt architecto molestias facilis cupiditate, ullam alias aut. Illum, quibusdam';

const aboutProject = `# Про проект
**Stonkapps** - это веб сайт, сочетающий в себе уроки по инвестированию и финансовый симулятор, позволяющий отточить знания на данных биржи за предыдущие года. Все *просто* - сначала читай, потом пробуй. Или наоборот. На данный момент песочница позволяет тоговать акциями более 10 компаний-голубых фишек (Не знаешь что это? Тогда регистрируйся, чтобы узнать).
`;

const history = `# Наша История
Проект по командной разработке в универе внезапно вылился вот в это.

Результатом мы, в целом, довольны. А вы? Будем ждать вашей обратной связи.

# Команда
### Наталья Денисова

[GitHub](https://github.com/fearisinternal)

### Владислав Добрынин

[GitHub](https://github.com/br1ghts1de)

### Марк Головатских

[GitHub](https://github.com/ujnomw)

### Никита Гужва

[GitHub](https://github.com/EliteGuzhva)
`;

const contacts = `# Контакты
[ВКонтакте](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

[Email](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

[GitHub](https://github.com/EliteGuzhva/Bulls-Bears)`;

export const HomePage: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <ReactMarkdown>{aboutProject}</ReactMarkdown>
      <ReactMarkdown>{history}</ReactMarkdown>
      <ReactMarkdown>{contacts}</ReactMarkdown>
    </div>
  );
};

const useStyles = makeStyles({
  homePage: {
    display: 'grid',
  },
});
