import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';


export default{

    namespaced: true,

    state()  {

        return{

            coaches:[

                {
                    id:'c1',
                    firstname:'Usman',
                    lastname:'Danish',
                    areas:['frontend','backend','career'],
                    description:"I'm Usman and I've worked as a Visiting Lecturer for years.",
                    hourlyRate:30,
                    
                },

                {
                    id:'c2',
                    firstname:'Zain',
                    lastname:'Mehboob',
                    areas:['frontend','backend'],
                    description:"I'm Zain and I've worked as a freelance web developer for years.",
                    hourlyRate:30,
                    
                },
            ],
        };
    },
    mutations,
    actions,
    getters
};