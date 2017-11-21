$(function () {
    var chatList=[
        {
            id:'1',
            quiz:'提问1',
            answer:'回答1',
        },
        {
            id:'2',
            quiz:'提问2',
            answer:'回答2',
        },{
            id:'3',
            quiz:'提问3',
            answer:'回答3',
        },{
            id:'4',
            quiz:'提问4',
            answer:'回答4',
        }
    ];
    var VMmain=new Vue({
        el:"#main",
        data:{
            chatList:[],
            inputChat:'',
            resultsShow:false,
            resultsLoading:false,
            results:{

            }
        },
        created:function () {
            // this.chatList=chatList;
        },
        mounted:function () {
        },
        components: {
            'main-layout': MainLayout
        },
        methods: {
            addChat:function () {
                if(this.inputChat==''||this.inputChat==undefined){
                    return false;
                }
               this.resultsLoading=true;
               this.resultsShow=false;
               var addobj={
                   id:this.chatList.length+1,
                   quiz:this.inputChat,
               };
               this.chatList.unshift(addobj);
               this.inputChat='';
               //TODO 添加成功回调
                setTimeout(function () {
                    this.resultsLoading=false;
                    this.resultsShow=true;
                }.bind(this),1000);
            }
        },
        watch:{
            chatList:function (value) {
                value[0].newItem=true;
            }
        }
    });
});