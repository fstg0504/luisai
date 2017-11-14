$(function () {
    var intentList=[
        {
            id:'1',
            name:'问候语',
            utterances:'对答问候语模型',
            precision:0.01,
        },
        {
            id:'2',
            name:'查询天气',
            utterances:'对答问题查询天气',
            precision:0.01,
        },
        {
            id:'3',
            name:'寻找歌单',
            utterances:'查找歌曲作者',
            precision:0.01,
        }
    ];
    var utterancesList=[
        {
            id:'1',
            utterance:'hello world',
            intentName:'问候语',
            precision:'0.8',
        },
        {
            id:'2',
            utterance:'吃饭了吗',
            intentName:'问候语',
            precision:'0.8',
        },
        {
            id:'3',
            utterance:'周末打算去哪里玩',
            intentName:'问候语',
            precision:'0.2',
        },
        {
            id:'4',
            utterance:'小明是谁',
            intentName:'问候语',
            precision:'0.1',
        },

    ];
    var VMmain=new Vue({
        el:"#main",
        data:{
            intentList:[],
            intentListShow:true,
            intentNameNow:'',
            utterancesList:[],
            utterancesListCheckList:[],
            utterancesListCheckAll:false,
            newUtterance:'',
            intentName:'',
            utterancesLiDisabled1:true,
            utterancesLiDisabled2:true,
            reassignList:[],
            reassignItem:{},
            reassignNum:'',
            reassignName:'',
            reassign_ul:false,
        },
        created:function () {
            this.intentList=intentList;
            this.utterancesList=utterancesList;
            this.reassignList=intentList;
        },
        mounted:function () {
            console.log(this.utterancesListCheckList)
        },
        components: {
            'main-layout': MainLayout
        },
        methods: {
            add:function () {
                var addobj={
                    name:this.intentName,
                    id:this.intentList.length+1,
                    utterances:'本地添加测试',
                }
                this.intentList.push(addobj);
                $('#addIntentModal').modal('hide');
                //TODO 提交
            },
            switcCheckListAll:function () {
                this.utterancesListCheckAll=!this.utterancesListCheckAll;
                if(this.utterancesListCheckAll){
                    this.utterancesLiDisabled2=false;
                }else {
                    this.utterancesLiDisabled2=true;
                    this.reassign_ul=false;
                }
                for(var i in this.utterancesListCheckList){
                    this.utterancesListCheckList[i]=this.utterancesListCheckAll;
                }

            },
            selectItem:function (id) {
                console.log(this.utterancesListCheckList);
            },
            selectAll:function () {
                console.log(this.utterancesListCheckList);
            },
            utterancesListShow:function (item) {
                this.intentNameNow=item.name;
                this.intentListShow=false;
            },
            addUtterance:function (event) {
                if(event.keyCode == "13") {
                    var addobj={
                        id:this.utterancesList.length+1,
                        intentName:this.intentNameNow,
                        precision:0.01,
                        utterance:this.newUtterance,
                        newItem:true,
                    };
                    this.utterancesList.unshift(addobj);
                    this.newUtterance='';
                }
            },
            reassignModuleShow:function (item) {
               $('#reassignUtterancesModal').modal('show');
               this.reassignItem=item;
            },
            reassignUtterances:function () {
              alert('reassignUtterancesModal保存成功');
                $('#reassignUtterancesModal').modal('hide');
            }
        },
        watch:{
            utterancesList:function () {
                this.utterancesListCheckList.splice(0,this.utterancesListCheckList.length);
                for(var i in this.utterancesList){
                    var node=this.utterancesList[i];
                    if(node.newItem){
                        this.utterancesListCheckList.push(true);
                    }else {
                        this.utterancesListCheckList.push(false);
                    }
                }
                this.utterancesLiDisabled2=false;
                console.log(this.utterancesListCheckList)
            },
            utterancesListCheckList:function () {
                if(this.utterancesListCheckList.includes(true)&&this.utterancesListCheckList.includes(false)){
                    // 混合值
                    this.utterancesLiDisabled2=false;
                    this.utterancesListCheckAll=false;
                }else {//单一值
                    if(this.utterancesListCheckList.includes(true)&&(!this.utterancesListCheckList.includes(false))){
                        // 全选
                        this.utterancesLiDisabled2=false;
                    }
                    if(this.utterancesListCheckList.includes(false)&&(!this.utterancesListCheckList.includes(true))){
                        // 全不选
                        this.utterancesLiDisabled2=true;
                        this.reassign_ul=false;
                        this.utterancesListCheckAll=false;
                    }
                }
            },
        }
    });
    $('.path-items .intents').on('click',function () {
        VMmain.intentListShow=true;
    })
});