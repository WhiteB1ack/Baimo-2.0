export interface LinkItem {
  title: string,
  url: string
}

export interface LinkGroup {
  title: string,
  links: LinkItem[]
}

export const links: LinkGroup[] = [
  {
    title: 'Friends Links',
    links: [
      {
        title: 'Friend A',
        url: 'https://example.com'
      },
      {
        title: 'Friend B',
        url: 'https://example.com'
      }
    ]  
  },

  {
    title: 'Good Links',
    links: [
      {
        title: 'Website A',
        url: 'https://example.com'
      },
      {
        title: 'Website B',
        url: 'https://example.com'
      }
    ]  
  },  

  {
    title: 'Useful Links',
    links: [
      {
        title: 'Tool A',
        url: 'https://example.com'
      },
      {
        title: 'Tool B',
        url: 'https://example.com'
      }
    ]  
  },  
]