
document.querySelectorAll(".accordion-repair").forEach((el)=>{
    el.addEventListener('click',()=>{
        let contentAccordion = el.nextElementSibling;
        let repairTypes = document.querySelector(".repair-types");
        let brandsRepairTypes = document.querySelector(".brands-repair-types");
        let hiddenBrands = document.querySelector(".brands__item-repair:nth-child(4)");
        let hiddenBrandsRepFive = document.querySelector(".brands__item-repair:nth-child(5)");
        let hiddenBrandsRepSix = document.querySelector(".brands__item-repair:nth-child(6)");
        let hiddenBrandsRepSeven = document.querySelector(".brands__item-repair:nth-child(7)");
        let hiddenBrandsRepEleven = document.querySelector(".brands__item-repair:nth-child(11)");
        let hiddentext = document.querySelector(".text-in-repair");
        let pageWidth = window.innerWidth;
        let textOut = document.querySelector(".text-out-repair");
        if(contentAccordion.style.maxHeight){
            document.querySelectorAll('.contentAccordion').forEach((el)=>el.style.maxHeight = null)

            repairTypes.style.height = "334px";
            brandsRepairTypes.style.height="208px";
            hiddenBrands.style.display="none";
            hiddenBrands.style.height="0";
            hiddenBrandsRepFive.style.display="none";
            hiddenBrandsRepFive.style.height="0";
            hiddenBrandsRepSix.style.display="none";
            hiddenBrandsRepSix.style.height="0";
            hiddenBrandsRepSeven.style.display="none";
            hiddenBrandsRepSeven.style.height="0";
            hiddentext.style.display="none";
            textOut.style.top = "9px";
            textOut.style.left = "30px";
            textOut.style.display = "inline";
        }
        else{
            document.querySelectorAll('.contentAccordion').forEach((el)=>el.style.maxHeight = null)
            contentAccordion.style.maxHeight = contentAccordion.scrollHeight + 'px'


            if (pageWidth >=1120){
                brands.style.height = "550px";
                textOut.style.top = "160px";
                textOut.style.left = "-730px"
                brands.style.height = "500px";
                brandsRepair.style.height="310px";
                hiddenBrands.style.display="flex";
                hiddenBrands.style.height="68px";
                hiddenBrandsEight.style.display="flex";
                hiddenBrandsEight.style.height="68px";
                hiddenBrandsNine.style.display="flex";
                hiddenBrandsNine.style.height="68px";
                hiddenBrandsTen.style.height="68px";
                hiddenBrandsEleven.style.height="68px";
                textOut.style.display = "none";
                hiddentext.style.display="inline";
            }
            else{
                repairTypes.style.height = "870px";
                brandsRepairTypes.style.height="310px";
                hiddenBrands.style.display="flex";
                hiddenBrands.style.height="160px";
                hiddenBrandsRepFive.style.display="flex";
                hiddenBrandsRepFive.style.height="160px";
                hiddenBrandsRepSix.style.display="flex";
                hiddenBrandsRepSix.style.height="160px";
                hiddenBrandsRepSeven.style.display="flex";
                hiddenBrandsRepSeven.style.height="160px";
                textOut.style.top = "25px";
                textOut.style.display = "none";
                hiddentext.style.display="inline";
            }

        }
    })
})