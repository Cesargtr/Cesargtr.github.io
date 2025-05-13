fetch("https://randomuser.me/api/?results=1")
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    const html = `
      <img src="${user.picture.large}" alt="Foto de perfil" class="profile-img">
      <h4><strong>${user.name.first} ${user.name.last}</strong></h4>
      <p><i class="bi bi-person-fill"></i> ${user.name.first} ${user.name.last}</p>
      <p><i class="bi bi-telephone-fill"></i> ${user.phone}</p>
      <p><i class="bi bi-envelope-fill"></i> ${user.email}</p>
      <p><i class="bi bi-geo-alt-fill"></i> ${user.location.city}, ${user.location.country}</p>
    `;
    document.getElementById("userCard").innerHTML = html;
  })
  .catch(error => {
    document.getElementById("userCard").innerHTML = "<p>Error al cargar el usuario</p>";
    console.error(error);
  });