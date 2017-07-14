const data = {
  menus: [
    { id: 1, text: 'Dashboard', icon: 'icon-speedometer', route: '/dashboard', 'parent': false },
    { id: 2, text: 'Participantes', icon: 'icon-user', route: '/participants', 'parent': false },
    { id: 4,
      text: 'Informacoes',
      icon: 'icon-phone',
      route: '',
      parent: true,
      children: [
      { id: 1, text: 'Dashboard', icon: 'icon-speedometer', route: '/dashboard', parent: false }
      ]}
  ]
}

export default data
