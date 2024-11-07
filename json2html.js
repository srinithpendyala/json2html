// json2html.js

export default function json2html(data) {
  // Start the table with the data-user attribute
  let html = '<table data-user="srinithpendyala@gmail.com">';
  
  // Create the table header
  html += '<thead><tr>';
  // Loop through the first item to get column names (keys)
  const columns = Object.keys(data[0]);
  columns.forEach(col => {
    html += `<th>${col}</th>`;
  });
  html += '</tr></thead>';
  
  // Create the table body
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    columns.forEach(col => {
      // Add a cell for each column in each row
      html += `<td>${row[col] !== undefined ? row[col] : ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody>';
  
  // Close the table
  html += '</table>';
  
  return html;
}
