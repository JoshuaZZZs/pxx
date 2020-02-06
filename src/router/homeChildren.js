const homeChildren = [{
    path: 'hot',
    name: 'Hot',
    meta: ['热门'],
    component: () => import('views/Home/NavList/Hot')
  },
  {
    path: 'box',
    name: 'Box',
    meta: ['箱包'],
    component: () => import('views/Home/NavList/Box')
  },
  {
    path: 'dress',
    name: 'Dress',
    meta: ['服饰'],
    component: () => import('views/Home/NavList/Dress')
  },
  {
    path: 'ele',
    name: 'Ele',
    meta: ['电器'],
    component: () => import('views/Home/NavList/Ele')
  },
  {
    path: 'food',
    name: 'Food',
    meta: ['零食'],
    component: () => import('views/Home/NavList/Food')
  },
  {
    path: 'general',
    name: 'General',
    meta: ['男装'],
    component: () => import('views/Home/NavList/General')
  },
  {
    path: 'mbaby',
    name: 'Mbaby',
    meta: ['母婴'],
    component: () => import('views/Home/NavList/Mbaby')
  }
]
export default homeChildren