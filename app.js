class Counter extends React.Component {


  render() {
    return (
      <div>
        <p>Kalkulator mnoży przez dwa, jeśli suma jest mniejsza niż 1000. Po przekroczeniu 1000 kalkualtor mnoży przez 0.5 aż osiągnie sumę mniejszą niż jeden. Wtedy ponownie zaczyna mnozyć przez dwa.</p>
      </div>
    )
  }
}


ReactDOM.render(<Counter />, document.getElementById('root'))
