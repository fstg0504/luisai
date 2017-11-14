var MainLayout = {
    template:
        `<div class="left-con">
            <h2>appname</h2>
            <h5>Version:  0.1</h5>
            <hr class="spacer-32-bottom">
            <ul class="path-items">
                <li class="path-li" v-for="item in pathList">
                    <a :href="item.url" :class="{'active':item.active}">{{item.text}}</a>
                </li>
            </ul>
        </div>`,
    data: function () {
        return {
            pathList: [
                {
                    url:'/overview.html',
                    text:'Intents',
                    active:false,
                },
                {
                    url:'',
                    text:'Entities',
                    active:false,
                },
                {
                    url:'/trainTest.html',
                    text:'Train & Test',
                    active:false,
                }
            ]
        }
    },
    created:function (){
        var pathname=location.pathname;
        for(var i in this.pathList){
            var node=this.pathList[i];
            if(node.url==pathname){
                node.active=true;
            }else {
                node.active=false;
            }
        }
    }
};