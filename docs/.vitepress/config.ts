import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '위형석 | SCM 전문가',
  description: 'SCM/조달 전문가 포트폴리오',
  lang: 'ko-KR',
  
  themeConfig: {
    nav: [
      { text: '소개', link: '/' },
      { text: '자격/어학', link: '/credentials' },
      { text: 'SCM 실무', link: '/scm-experience' },
      { text: '업무 자동화', link: '/automation' },
      { text: '기술 스택', link: '/skills' }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/winston365' }
    ],
    
    outline: {
      label: '목차',
      level: [2, 3]
    },
    
    footer: {
      message: 'SCM/조달 전문가 포트폴리오',
      copyright: '© 2026 위형석'
    },
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '검색' },
          modal: {
            noResultsText: '결과 없음',
            resetButtonTitle: '초기화',
            footer: { selectText: '선택', navigateText: '이동' }
          }
        }
      }
    }
  }
})
