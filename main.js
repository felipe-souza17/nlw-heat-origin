const linksSocialMedia = {
  github: 'felipe-souza17',
  youtube: '',
  facebook: '',
  twitter: 'flp_souza17',
  instagram: 'souza_litz'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.src = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

turn_mode.addEventListener('click', () => {
  let bg_card = document.getElementById('bg-card')
  let userLink = document.getElementById('userLink')

  body.classList.toggle('background')
  bg_card.classList.toggle('bg-desktop-light')
  userLink.classList.toggle('text-mode')
  if (turn_mode.innerHTML.includes('fa-sun'))
    turn_mode.innerHTML = '<i class="fas fa-moon"></i>'
  else turn_mode.innerHTML = '<i class="fas fa-sun"></i>'
})
