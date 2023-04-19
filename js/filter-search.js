(functtion(){
    var $imgs=$('#gallery img');
    var $search = $('#filter-search');
    var cache=[];

    $imgs.each(function)(){
    caches.push({
        element: this,
        text: this.alert.trim().toLowerCase()
    });
});

(function filter(){
    var query=this.value.trim().toLowerCase();
    caches.forEach(function(img)){
        var index=0;

        if (query)
            index=img.text.indexOf(query);
    }

    img.element.style.display = index ===-1? 'none':'';
});
}

if('oninput' in $search[0]){
    $search.on('input',filter);
}else{
    $search.on('keyup',filter)
}

}());
