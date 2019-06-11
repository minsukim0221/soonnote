$(document).ready(function() {
   
    $("#ccmReg").click(() => {
        
        //제목
        let sTitle = $("#title").val();
        //가수
        let sSinger = $("#singer").val();
        //가사
        let sLyrics = $("#lyrics").val();
        //내용
        let sContent = $("#content").val();

        let sCmId = "" ; //임의 id부여 차후 채번모듈추가예정.
        console.log(sTitle); 
        //validation check

        

        if(sTitle === "") {
            alert("제목을 입력해주세요.");
            $("#title").focus(); 
            return false;
        }
        if(sSinger === "") {
            alert("가수를 입력해주세요.");
            $("#singer").focus();
            return false;
        }
        if(sContent === "") {
            alert("내용을 입력해주세요.");
            $("#content").focus();
            return false;
        }
        $.ajax({
            url: "http://localhost:8071/api/ccm/getNewCcmKey",
            type: "get",
            dataType: "json",
            data: {},
            success: (responseData) => {
                let data = responseData.data;
                if(parseInt(data[0].CM_ID) != '') { // 해당 아이디의 count 가 0 이라면 즉, 중복되지 않는다면
                    console.log('게시물 id 채번 성공>>'+data[0].CM_ID);

                    sCmId = data[0].CM_ID;


                    // 채번된 값으로 new 생성. ex) t0003 -> t0004
                    sCmId = 't'+lpad((Number(sCmId.substring(1,5))+1)+'',4,'0');
                    

                    $.ajax({
                    
                        url: "http://localhost:8071/api/ccm/ccmReg", //등록 
                        type: "post",
                        dataType: "json",
                        //data:{},
                        data:{"CM_ID":sCmId
                            ,"CM_TITLE":sTitle
                            ,"CM_LYRICS":sLyrics
                            ,"CM_CONTENT":sContent 
                            ,"CM_SINGER":sSinger
                            ,"CM_IMAGE":""
                            ,"CM_SONG":""
                            ,"CM_THEME":""
                            ,"CM_LOOKUP_COUNT":""
                            ,"CM_USER":"김민수"
                            ,"PC_DT":""
                            ,"FST_PC_DT":""
                            ,"DEL_YN":""
                            },
                    
                        success: (responseData) => {
                            let error = responseData.Error;
                            console.log(responseData.data);
                            if(error === false) { // 성공했다면
                                alert("입력완료");
                                $(location).attr('href', '#/ccm');
                            }
                        },
                        error: (xhr, status, error) => {
                            console.log(error);
                        }
                    });
                } else { // 해당 아이디의 count 가 0 이 아니라면 즉, 중복된다면
                    alert('게시물 id 채번 실패');
                }
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });

 
    });
});

function lpad(s, padLength, padString){
 
    while(s.length < padLength)
        s = padString + s;
    return s;
}
 
function rpad(s, padLength, padString){
    while(s.length < padLength)
        s += padString;
    return s;
}