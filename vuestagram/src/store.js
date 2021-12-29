import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return {
            name : 'koo', // 이건 그냥 개념 연습했던 용도로 사그락...
            age : 20,
            likes : [10, 20, 30], //이거로 likes 바꿀까 했다가 이전에 만들어 둔 data와 꼬이고 정리가 잘 x 걍 이건 없던거로...
            likebool : false,
            more : {},
        }
    },
    mutations :{
        //----- actions로 state를 바꾸기 위해 mutation 하나 생성 ------
        setMore(state, data){
            state.more = {data}
        },
        //--------------------------------------------------------------
        changename(state){
            state.name= 'park'
        },
        plusage(state, data1){
            state.age+= data1
        },
        pluslikes(state, data){
            if(state.likebool == false){
                state.likes[data]++;
                state.likebool= true;
            }else{
                state.likes[data]--;
                state.likebool=false;
            }
        }
    },
    //------------------ 더보기 기능개발 vuex 버젼 -------------------
    actions :{ // actions : ajax or 오래 걸리는 작업들 수행하는 공간
        getData(context){ 
            // actions안의 함수에 넣는 파라 값(관습:context)은 $store라 생각
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((a)=>{
                console.log(a.data); 
        //axios으로 가져온 데이터를 이처럼 setMore함수의 파라미터값으로 보내면
        //acions로 시작하여 mutation으로 state를 바꾸며 마무리 할 수 O
                context.commit('setMore', a.data)
            })
        }
    }
})

export default store;