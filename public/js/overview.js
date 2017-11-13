$(function () {
    var testDate=[
        {
            id:'1',
            name:'你问我答',
            utterances:'对答问题模型',
        },
        {
            id:'2',
            name:'test3',
            utterances:'22222',
        },
        {
            id:'3',
            name:'app1',
            utterances:'aaa33',
        }
    ];
    var testutterancesList=[
        {
            id:'1',
            name:'hello world',
            title:'问候',
            info:'测试你好的回答',
        },
        {
            id:'2',
            name:'北京天气',
            title:'天气',
            info:'查询天气',
        },
        {
            id:'3',
            name:'询问火车票',
            title:'车票',
            info:'查询天气',
        },{
            id:'4',
            name:'寻找歌单',
            title:'车票',
            info:'查询天气',
        },

    ];
    var reassignList=[
        {
            id:'1',
            name:'hello world',
            precision:0.5,
        },
        {
            id:'2',
            name:'北京天气',
            precision:0.05,
        },
        {
            id:'3',
            name:'上海车票',
            precision:0.99,
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
            this.intentList=testDate;
            this.utterancesList=testutterancesList;
            this.reassignList=testutterancesList;
        },
        mounted:function () {
            console.log(this.utterancesListCheckList)
        },
        methods: {
            add:function () {
                var opt={
                    name:this.intentName,
                    id:this.intentList.length,
                    utterances:'本地添加测试',
                }
                this.intentList.push(opt);
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
                for(var i in this.utterancesList){
                    this.utterancesListCheckList.push(false);}

                this.utterancesLiDisabled2=false;
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
});