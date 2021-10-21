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

turn_mode.addEventListener('click', () => {
  let bg_card = document.getElementById('bg-card')
  let link_card = document.getElementById('link-card')
  let i = document.querySelector('.btn-light')

  body.classList.toggle('background')
  bg_card.classList.toggle('bg-mode')
  link_card.classList.toggle('text-mode')
  if (turn_mode.innerHTML.includes('fa-sun'))
    turn_mode.innerHTML = '<i class="fas fa-moon"></i>'
  else turn_mode.innerHTML = '<i class="fas fa-sun"></i>'
})
