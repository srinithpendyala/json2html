// json2html.js
export default function json2html(data) {
  // Start the table with the custom data-user attribute
  let html = '<table data-user="srinithpendyala@gmail.com">';
  
  // Create the table header with three columns: Name, Age, and Gender
  html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  
  // Create the table body
  html += '<tbody>';
  
  // Loop through the data array to create rows
  data.forEach(item => {
    html += '<tr>';
    
    // Add the Name and Age columns, ensure Age is always present
    html += `<td>${item.Name}</td><td>${item.Age}</td>`;
    
    // If Gender exists, add it; otherwise, leave it blank
    html += item.Gender ? `<td>${item.Gender}</td>` : '<td></td>';
    
    html += '</tr>';
  });
  
  // Close the table body and the table tag
  html += '</tbody></table>';
  
  return html;
}
