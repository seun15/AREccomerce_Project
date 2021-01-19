function showFilter(){
    $('.filterBtn').click(function(){
        $('#container').hide();
        $('#containerFilter').show();
    });
}
showFilter();

function hideFilter(){
$('.closeFilterIcon').click(function(){
        $('#containerFilter').hide();
        $('#container').show();
    });
}
hideFilter();

//show other options
function filterOptions(){
    //filter option1
    $('#categoryBtn').click(function(){
        $('.hiddenFilterOptionOne').show();
        $('.hiddenFilterOptionThree').hide();
    });
}
filterOptions();

function filterTwoOptions(){
    //filter option2
    $('#priceBtn').click(function(){
        $('.hiddenFilterOptionOne').hide();
        $('.hiddenFilterOptionThree').show();
    });
}
filterTwoOptions();

//filter system options
function categoryFilter(){
    $('.filterOption').click(function(){
       var filterOption = $(this).attr('id');
       //sofa
       if(filterOption =='sofa'){
          $('#sofa').addClass('clickedFilterOption_Active')
          $('.productCard').addClass('hide')
          setTimeout(function(){
              $('.sofa').removeClass('hide')
          }, 300);
       }else{
        $('#sofa').removeClass('clickedFilterOption_Active')
       }

       if(filterOption =='sofabed'){
        $('#sofabed').addClass('clickedFilterOption_Active')
        $('.productCard').addClass('hide')
        setTimeout(function(){
            $('.sofabed').removeClass('hide')
        }, 300);
        }else{
           $('#sofabed').removeClass('clickedFilterOption_Active')
        }

        if(filterOption =='armchair'){
            $('#armchair').addClass('clickedFilterOption_Active')
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.armchair').removeClass('hide')
            }, 300);
            }else{
               $('#armchair').removeClass('clickedFilterOption_Active')
        }

        if(filterOption =='bookcaseshelfunits'){
            $('#bookcaseshelfunits').addClass('clickedFilterOption_Active')
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.bookcaseshelfunits').removeClass('hide')
            }, 300);
            }else{
               $('#bookcaseshelfunits').removeClass('clickedFilterOption_Active')
        }

        if(filterOption =='cabinetscupboards'){
            $('#cabinetscupboards').addClass('clickedFilterOption_Active')
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.cabinetscupboards').removeClass('hide')
            }, 300);
            }else{
               $('#cabinetscupboards').removeClass('clickedFilterOption_Active')
        }

        if(filterOption =='Tvstand'){
            $('#Tvstand').addClass('clickedFilterOption_Active')
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.Tvstand').removeClass('hide')
            }, 300);
            }else{
               $('#Tvstand').removeClass('clickedFilterOption_Active')
        }

        if(filterOption =='CoffeeTablesSideTables'){
            $('#CoffeeTablesSideTables').addClass('clickedFilterOption_Active')
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.CoffeeTablesSideTables').removeClass('hide')
            }, 300);
            }else{
               $('#CoffeeTablesSideTables').removeClass('clickedFilterOption_Active')
        }

        if(filterOption =='Wallshelves'){
            $('#Wallshelves').addClass('clickedFilterOption_Active')
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.Wallshelves').removeClass('hide')
            }, 300);
            }else{
               $('#Wallshelves').removeClass('clickedFilterOption_Active')
        }

        if(filterOption =='Rugs'){
            $('#Rugs').addClass('clickedFilterOption_Active')
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.Rugs').removeClass('hide')
            }, 300);
            }else{
               $('#Rugs').removeClass('clickedFilterOption_Active')
        }
        
        if(filterOption =='Lamp'){
            $('#Lamp').addClass('clickedFilterOption_Active')
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.Lamp').removeClass('hide')
            }, 300);
            }else{
               $('#Lamp').removeClass('clickedFilterOption_Active')
        }

        if(filterOption =='Accessories'){
            $('#Accessories').addClass('clickedFilterOption_Active')
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.Accessories').removeClass('hide')
            }, 300);
            }else{
               $('#Accessories').removeClass('clickedFilterOption_Active')
        }
    });
}
categoryFilter();

function priceFilter(){
    $('.filterOptionThree').click(function(){
          var filterOptionThree = $(this).attr('id');

          if(filterOptionThree == 'priceRange_One'){
                $('#priceRange_One').addClass('clickedFilterOption_Active');
                $('.productCard').addClass('hide')
                setTimeout(function(){
                    $('.priceRange_One').removeClass('hide')
                },300);
          }else{
            $('#priceRange_One').removeClass('clickedFilterOption_Active');
          }

          if(filterOptionThree == 'priceRange_Two'){
            $('#priceRange_Two').addClass('clickedFilterOption_Active');
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.priceRange_Two').removeClass('hide')
            },300);
         }else{
           $('#priceRange_Two').removeClass('clickedFilterOption_Active');
         }

         if(filterOptionThree == 'priceRange_Three'){
            $('#priceRange_Three').addClass('clickedFilterOption_Active');
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.priceRange_Three').removeClass('hide')
            },300);
         }else{
           $('#priceRange_Three').removeClass('clickedFilterOption_Active');
         }

         if(filterOptionThree == 'priceRange_Four'){
            $('#priceRange_Four').addClass('clickedFilterOption_Active');
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.priceRange_Four').removeClass('hide')
            },300);
         }else{
           $('#priceRange_Four').removeClass('clickedFilterOption_Active');
         }

         if(filterOptionThree == 'priceRange_Five'){
            $('#priceRange_Five').addClass('clickedFilterOption_Active');
            $('.productCard').addClass('hide')
            setTimeout(function(){
                $('.priceRange_Five').removeClass('hide')
            },300);
         }else{
           $('#priceRange_Five').removeClass('clickedFilterOption_Active');
         }

      

    });
}
priceFilter();

function arProductsFilter(){
    $('#arBtn').click(function(){
        $('.productCard').hide();
        setTimeout(function(){
            $('.arProducts').show();
        },300);
        $('.resetBtn').click(function(){
            $('.productCard').show();
        });
    });
}
arProductsFilter();

function resetFilter(){
    $('#reesetButton').click(function(){
        $('.filterOption').removeClass('clickedFilterOption_Active');
        $('.filterOptionThree').removeClass('clickedFilterOption_Active');
       setTimeout(function(){
          $('.productCard').removeClass('hide')
       }, 300);
  });
}
resetFilter();

function changeTitleColor(){
    $('#categoryBtn').click(function(){
        $("#categoryBtn").addClass("addColour");
    });
    $('#priceBtn').click(function(){
        $("#priceBtn").addClass("addColour");
    });
    $('#arBtn').click(function(){
        $("#arBtn").addClass("addColour");
    });
    $('#reesetButton').click(function(){
        $("#reesetButton").addClass("addColour");
    });

    $('.closeFilterIcon').click(function(){
        $("#categoryBtn").removeClass("addColour");
        $("#priceBtn").removeClass("addColour");
        $("#arBtn").removeClass("addColour");
        $("#reesetButton").removeClass("addColour");
    });
}

changeTitleColor()

function filterAlertMessage(){
    $('.filterBtn').click(function(){
        alert('Only one filter can be applied once at a time');
    });
}
filterAlertMessage()