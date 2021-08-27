import React from 'react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <i className="fa fa-tachometer c-sidebar-nav-icon"></i>,
    badge: {
      color: 'info',
      text: '',

    }
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Packages',
    route: '/Package',
    icon: <i className="fa fa-inr c-sidebar-nav-icon"></i>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Package',
        to: '/Package/AddPackage',
        icon: <i className="fa fa-plus c-sidebar-nav-icon"></i>
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Package',
        to: '/Package/AllPackage',
        icon: <i className="fa fa-check-circle-o  c-sidebar-nav-icon"></i>
      },

    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'TV Channels',
    route: '/TVChannel',
    icon: <i className="fa fa-television c-sidebar-nav-icon"></i>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add TV channel',
        to: '/AddLiveTv',
        icon: <i className="fa fa-plus c-sidebar-nav-icon"></i>
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'ALL TV Channels',
        to: '/AllLiveTv',
        icon: <i className="fa fa-check-circle-o  c-sidebar-nav-icon"></i>
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Movie',
    route: '/Movies',
    icon: <i className="fa fa-video-camera c-sidebar-nav-icon"></i>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Movie',
        to: '/AddMovies',
        icon: <i className="fa fa-plus c-sidebar-nav-icon"></i>
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Movies',
        to: '/AllMovies',
        icon: <i className="fa fa-check-circle-o  c-sidebar-nav-icon"></i>
      },

    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'TV Series',
    route: '/Web',
    icon: <i className="fa fa-film c-sidebar-nav-icon"></i>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add TV series',
        to: '/AddWeb',
        icon: <i className="fa fa-plus c-sidebar-nav-icon"></i>
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All TV series',
        to: '/AllWeb',
        icon: <i className="fa fa-check-circle-o  c-sidebar-nav-icon"></i>
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'My TV series',
        to: '/MyWeb',
        icon: <i className="fa fa-check-circle  c-sidebar-nav-icon"></i>
      },


    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Music',
    to: '/Music',
    icon: <i className="fa fa-music c-sidebar-nav-icon"></i>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Music',
        to: '/AddMusic',
        icon: <i className="fa fa-plus c-sidebar-nav-icon"></i>,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Musics',
        to: '/AllMusic',
        icon: <i className="fa fa-check-circle-o c-sidebar-nav-icon"></i>,
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Theme Settings',
    to: '/themeSettings',
    icon: <i className="fa fa-gear c-sidebar-nav-icon"></i>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Slider',
        to: '/Slider',
        icon: <i className="fa fa-sliders c-sidebar-nav-icon"></i>,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Categeories',
        to: '/Categeories',
        icon: <i className="fa fa-object-group c-sidebar-nav-icon"></i>,
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Director/Actor',
    to: '/Director',
    icon: <i className="fa fa-user-plus c-sidebar-nav-icon"></i>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Person',
        to: '/AddPerson',
        icon: <i className="fa fa-plus c-sidebar-nav-icon"></i>,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Person',
        to: '/AllPerson',
        icon: <i className="fa fa-check-circle-o c-sidebar-nav-icon"></i>,
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Publisher',
    to: '/Publisher',
    icon: <i className="fa fa-user-circle c-sidebar-nav-icon"></i>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Publisher',
        to: '/AddPublisher',
        icon: <i className="fa fa-plus c-sidebar-nav-icon"></i>,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Publisher',
        to: '/AllPublisher',
        icon: <i className="fa fa-check-circle-o c-sidebar-nav-icon"></i>,
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'All User',
    to: '/UserList',
    icon: <i className="fa fa-users c-sidebar-nav-icon"></i>,
  }
]

export default _nav
