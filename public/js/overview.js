$(function () {
    var testDate=[
        {
            id:'1',
            name:'aaa',
            utterances:'aaa',
        },
        {
            id:'2',
            name:'22222',
            utterances:'22222',
        },
        {
            id:'3',
            name:'aaa33',
            utterances:'aaa33',
        }
    ];
    var VMmyapps=new Vue({
        el:"#main",
        data:{
            intentList:[],
            utterancesList:[],
            intentName:'',
        },
        created:function () {
            this.intentList=testDate;
        },
        mounted:function () {
        },
        methods: {
            add:function () {
                $('#addIntentModal').modal('hide');
                var opt={
                    intentName:this.intentName,
                }
                //TODO 提交
            }
        }
    });
});