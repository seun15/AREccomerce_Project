function showSearchBar(){
    $('#search').click(function(){
        $("#searchArea").css({'display':'flex','justify-content':'center',});
        $("#searchArea").show();
    });
}
showSearchBar();

function inputOptionFocus(){
    if(searchBar){
        $('#searchContainer').css({'width':'290px'});
        $('.containerCloseIconBtn').show();
    }
}
inputOptionFocus();

var searchBar = document.getElementById('searchBar');
searchBar.addEventListener('focus',inputOptionFocus,false);

function hideSearchBar(){
    $('.containerCloseIconBtn').click(function(){
        $('#searchContainer').css({'width':'90%','margin-left':'0px'});
        $("#searchArea").hide();
        $('.containerCloseIconBtn').hide();

    });
}
hideSearchBar();