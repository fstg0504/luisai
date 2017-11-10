$(function () {
    var testDate=[
        {
            id:'1',
            name:'aaa',
            culture:'aaa',
            createdDate:'Nov 9, 2017, 11:51:29 AM',
            endpointHits:'aaa',
            controls:'aaa',
        },
        {
            id:'2',
            name:'22222',
            culture:'22222',
            createdDate:'Nov 9, 2017, 11:51:29 AM',
            endpointHits:'22222222',
            controls:'aa22a',
        },
        {
            id:'3',
            name:'aaa33',
            culture:'aaa33',
            createdDate:'Nov 9, 2017, 11:51:29 AM',
            endpointHits:'aaa33',
            controls:'aaa33',
        }
    ];
   var VMmyapps=new Vue({
       el:"#main",
       data:{
           applist:[],
           addappName:'',
           addappDescription:'',
       },
       created:function () {
           this.applist=testDate;
       },
       mounted:function () {
       },
       methods: {
           add:function () {
               $('#addAPPModal').modal('hide');
               var opt={
                   appName:this.addappName,
                   addappDescription:this.addappDescription,
               }
               //TODO 提交
           }
       }
   });

});