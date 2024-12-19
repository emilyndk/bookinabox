/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {   

		extend: {

      cursor: {
        'handcursor': 'url(/filled.png) 25 25, pointer',
      },

      keyframes: {
        typewriter: {
          'from': { width: '0%' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typewriter: 'typewriter 3s steps(30, end), blink .5s step-end infinite',
      },
    
            opacity:{
                50: '.50',   
   
            },

         /* Tilføj din egen spacing nedenfor */
        spacing: {
            'xxs': '10px',
            'xs':'20px',
            's':'40px',
            'm':'80px',
            'l':'120px',
      },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      fontFamily: {
        lemondejournal: ['lemonde-journal', 'serif'],
        
      },

      fontWeight:{
         regular:'400',
         semibold:'600',
         bold:'700',

      },

      borderWidth:{
         DEFAULT:'2px',

      },

      dropShadow:{
         regular:'5px 4px 4px rgba(0,0, 0.25)'
         
      },

         /* Tilføj dit typografiske hierarki herunder */
     fontSize: {
       'h1-mobil': ['89.8px', { lineHeight: 'auto' }],
         'h2-mobil': ['67.3px', { lineHeight: 'auto' }],
         'h3-mobil': ['50.5px', { lineHeight: 'auto' }],
         'h4-mobil': ['37.9px', { lineHeight: 'auto' }],
         'h5-mobil': ['28.4px', { lineHeight: 'auto' }],
         'h6-mobil': ['21.3px', { lineHeight: 'auto' }],
         'p-mobil': ['16px', { lineHeight: 'auto' }],
         'h1-display-desktop': ['150px', { lineHeight: '120px' }],
         'h1-desktop': ['112.2px', { lineHeight: '112.2px' }],
         'h2-desktop': ['84.2px', { lineHeight: 'auto' }],
         'h3-desktop': ['63.2px', { lineHeight: 'auto' }],
         'h4-desktop': ['47.4px', { lineHeight: 'auto' }],
         'h5-desktop': ['35.5px', { lineHeight: 'auto' }],
         'h6-desktop': ['26.7px', { lineHeight: 'auto' }],
         'p-desktop': ['20px', { lineHeight: 'auto' }],
        
      },

      gridTemplateColumns: {
        'grid-mobil': 'repeat(4, 1fr)',
        'grid-tablet':'repeat (8, 1fr)',
        'grid-desktop': 'repeat(12, 1fr)',

      },

   margin:{
    'margin-mobil': '20px',
    'margin-tablet': '40px',
    'margin-desktop': '60px',
},

gap:{
    'gap-mobil': '20px',
    'gap-tablet': '30px',
    'gap-desktop': '40px',
},


         colors: {
                    transparent: 'transparent',
                   current: 'currentColor',
                   
                   forrest: {
                      
                    500: '#5b6c5d',
                   600: '#48564a',
                   
                 },
                sage: {
                      
                    200: '#fbfdf7',
                   500: '#F5F9E9',
                   
                 },

                 cherry: {
                      
                    500: '#FBACBE',
                  
                 },

                 maroon: {
                      
                    500: '#563635',
                   400: '#845352',
                   
                 },
                  
                },

        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}