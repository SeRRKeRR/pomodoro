export const indexTemplate = (content, token) => `
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Pomodoro</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1.0">
    <script src="/static/client.js" type="application/javascript"></script>
    <script>window.__token__='${token}'</script>
  </head>
  <body>
    <div id="react-root">${content}</div>
    <div id="modal-root"></div>
  </body>
</html>
`;
