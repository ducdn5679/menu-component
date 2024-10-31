module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      textColor: {
        primary: '#0F5C67',
        gray: '#262626',
        orgTitleColor: '#8C8C8C',
        title: 'var(--ant-title)',
        subtitle: 'var(--ant-subtitle)',
        warning: '#FFB916'
      },
      fill: {
        default: '#434343',
        warning: '#FFB916'
      },
      backgroundColor: {
        main: 'var(--ant-backgroundMain)',
        'selected-row': 'BFCAC9',
        grey: '#f5f5f5'
      },
      colors: {
        'te-background-color': '#0F5C67',
        'main-background-color': '#FFFFFF',
        'red-6': '#EF5044',
        'gray-10': '#262626',
        'gray-7': '#8C8C8C',
      },
      width: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        max: '1440px',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        footer: '39px',
      },
      inset: {
        md: '24px',
        lg: '46px',
      },
      fontSize: {
        xs: ['12px', '20px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      spacing: {
        xsm: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        42: '168px',
        48: '192px',
      },
      fontFamily: {
        sourceSanPro: ['Source Sans Pro'],
      },
      boxShadow: {
        topBar: '0px 2px 2px rgba(0, 0, 0, 0.25)',
        bottomBar:
          '0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)',
      },
      dropShadow: {
        topBar: '0px 2px 2px rgba(0, 0, 0, 0.25)',
      },
      flex: {
        '1/3': '0.33 0.33 0%',
      },
    },
    borderColor: () => ({
      base: '#262626',
      primary: '#0F5C67',
      disabled: 'rgba(0, 0, 0, 0.06)',
      main: 'var(--ant-borderMain)',
      form: 'D9D9D9',
    }),
  },
  plugins: [],
  prefix: 'te-'
};
