fetch('/api/foods')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('foods');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.phenylalanineMg} mg Phe`;
      list.appendChild(li);
    });
  })
  .catch(err => console.error('Error fetching foods:', err));
