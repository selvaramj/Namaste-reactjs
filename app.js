document.addEventListener('DOMContentLoaded', () => {
  /**
   * <div id='parent'>
   *   <div id='child-1'>
   *      <h1> H1 Tag </h1>
   *      <h2> H2 Tag </h2>
   *   </div>
   *   <div id='child-2'>
   *      <h1> H1 Tag </h1>
   *      <h2> H2 Tag </h2>
   *   </div>
   * </div>
   *
   * */
  const heading = React.createElement('div', { id: 'parent', dummy: 'dummy' }, [
    React.createElement('div', { id: 'child-1' }, [
      React.createElement('h1', {}, 'H1 TAG'),
      React.createElement('h2', {}, 'H2 TAG'),
    ]),
    React.createElement('div', { id: 'child-2' }, [
      React.createElement('h1', {}, 'H1 TAG'),
      React.createElement('h2', {}, 'H2 TAG'),
    ]),
  ]);
  const button = React.createElement('button', {}, 'click me');
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(heading);
});
