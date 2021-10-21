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