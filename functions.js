// List function to create an HTML string from an array of clients
function list(clients) {
    return clients.map((client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name} <strong>$${client.balance}</strong>
      </li>
    `).join('');
  }
  
  // Order function to sort clients by a specified property
  function order(clients, property) {
    return clients.sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }
  
  // Total function to calculate the total sum of balances
  function total(clients) {
    return clients.reduce((acc, client) => acc + client.balance, 0);
  }
  
  // Info function to find a client by index
  function info(clients, index) {
    return clients.find((client, i) => i === index);
  }
  
  // Search function to filter clients based on a search query
  function search(clients, query) {
    const lowerCaseQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerCaseQuery));
  }