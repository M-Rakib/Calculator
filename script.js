$(document).ready(function () {
  function steamrollArray(arr) {
    return arr
      .toString()
      .replace(",,", ",") // "1,2,,3" => "1,2,3"
      .split(",") // ['1','2','3']
      .map(function (v) {
        if (v == "[object Object]") {
          // bring back empty objects
          return {};
        } else if (isNaN(v)) {
          // if not a number (string)
          return v;
        } else {
          return parseInt(v); // if a number in a string, convert it
        }
      });
  }

  var power = "off";
  var arr = [];
  var arr1 = [];
  var ans = [];
  var neg = [];
  var neg1 = 0;
  var neg2 = 0;
  var equalPressed = 0;

  $("#power").on("click", function () {
    if (power === "off") {
      $("#power").animate({ color: "green" }, 200);
      power = "on";
      $(".display-top").html(0);
      $(".display-bottom").html(0);
    } else {
      $("#power").animate({ color: "red" }, 200);
      power = "off";
      $(".display-top").html("<h4>OFF</h4>");
      $(".display-bottom").html("");
      arr = [];
      arr1 = [];
      ans = [];
      neg1 = 0;
      neg2 = 0;
      equalPressed = 0;
    }
  });

  $("#one").on("click", function () {
    $("#power").animate({ color: "green" }, 200);
    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      arr1.push(1);
      $(".display-top").html(arr1.join(""));
      arr.push(1);
      $(".display-bottom").html(arr.join(""));
      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#two").on("click", function () {
    $("#power").animate({ color: "green" }, 200);
    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      arr1.push(2);
      $(".display-top").html(arr1.join(""));
      arr.push(2);
      $(".display-bottom").html(arr.join(""));
      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#three").on("click", function () {
    $("#power").animate({ color: "green" }, 200);

    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      arr1.push(3);
      $(".display-top").html(arr1.join(""));
      arr.push(3);
      $(".display-bottom").html(arr.join(""));
      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#four").on("click", function () {
    $("#power").animate({ color: "green" }, 200);
    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      arr1.push(4);
      $(".display-top").html(arr1.join(""));
      arr.push(4);
      $(".display-bottom").html(arr.join(""));
      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#five").on("click", function () {
    $("#power").animate({ color: "green" }, 200);
    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      arr1.push(5);
      $(".display-top").html(arr1.join(""));
      arr.push(5);
      $(".display-bottom").html(arr.join(""));
      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#six").on("click", function () {
    $("#power").animate({ color: "green" }, 200);
    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      arr1.push(6);
      $(".display-top").html(arr1.join(""));
      arr.push(6);
      $(".display-bottom").html(arr.join(""));
      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#seven").on("click", function () {
    $("#power").animate({ color: "green" }, 200);
    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      arr1.push(7);
      $(".display-top").html(arr1.join(""));
      arr.push(7);
      $(".display-bottom").html(arr.join(""));
      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#eight").on("click", function () {
    $("#power").animate({ color: "green" }, 200);
    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      arr1.push(8);
      $(".display-top").html(arr1.join(""));
      arr.push(8);
      $(".display-bottom").html(arr.join(""));
      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#nine").on("click", function () {
    $("#power").animate({ color: "green" }, 200);
    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      arr1.push(9);
      $(".display-top").html(arr1.join(""));
      arr.push(9);

      $(".display-bottom").html(arr.join(""));
      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
      }
    }
    console.log(ans);
  });

  $("#zero").on("click", function () {
    $("#power").animate({ color: "green" }, 200);
    power = "on";
    if (neg1 == 1 || equalPressed == 1) {
      console.log("soz");
    } else {
      if (arr.length !== 0) {
        arr1.push(0);
        $(".display-top").html(arr1.join(""));
        arr.push(0);
        $(".display-bottom").html(arr.join(""));
      } else {
        $(".display-top").html(0);
        $(".display-bottom").html(0);
      }

      if (arr.length > 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#divide").on("click", function () {
    if (power === "on") {
      equalPressed = 0;
      if (neg1 == 1) {
        neg2 = 0;
        neg1 = 0;
        if (
          arr.length == 0 ||
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          console.log("soz");
        } else if (arr[arr.length - 1] !== "&#247;") {
          $(".display-top").html("&#247;");
          arr.push("&#247;");
          ans.push(arr1);
          ans.push("&#247;");
          arr1 = [];
          $(".display-bottom").html(arr.join(""));
          if (arr.length > 22 || arr1.length > 13) {
            $(".display-bottom").html("Digit Limit Met!");
            $(".display-top").html(0);
            arr = [];
            arr1 = [];
            ans = [];
            neg1 = 0;
            neg2 = 0;
          }
        }
      } else {
        if (
          arr.length == 0 ||
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          console.log("soz");
        } else if (arr[arr.length - 1] !== "&#247;") {
          $(".display-top").html("&#247;");
          arr.push("&#247;");
          ans.push(arr1);
          ans.push("&#247;");
          arr1 = [];
          $(".display-bottom").html(arr.join(""));
          if (arr.length > 22 || arr1.length > 13) {
            $(".display-bottom").html("Digit Limit Met!");
            $(".display-top").html(0);
            arr = [];
            arr1 = [];
            ans = [];
            neg1 = 0;
            neg2 = 0;
          }
        }
      }
    }
    console.log(arr);
  });

  $("#times").on("click", function () {
    if (power === "on") {
      equalPressed = 0;
      if (neg1 == 1) {
        neg2 = 0;
        neg1 = 0;
        if (
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          console.log("soz");
        } else if (arr[arr.length - 1] !== "&#215;") {
          $(".display-top").html("&#215;");
          arr.push("&#215;");
          ans.push(arr1);
          ans.push("x");
          arr1 = [];
          $(".display-bottom").html(arr.join(""));
          if (arr.length > 22 || arr1.length > 13) {
            $(".display-bottom").html("Digit Limit Met!");
            $(".display-top").html(0);
            arr = [];
            arr1 = [];
            ans = [];
            neg1 = 0;
            neg2 = 0;
          }
        }
      } else {
        if (
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          console.log("soz");
        } else if (arr[arr.length - 1] !== "&#215;") {
          $(".display-top").html("&#215;");
          arr.push("&#215;");
          ans.push(arr1);
          ans.push("x");
          arr1 = [];
          $(".display-bottom").html(arr.join(""));
          if (arr.length > 22 || arr1.length > 13) {
            $(".display-bottom").html("Digit Limit Met!");
            $(".display-top").html(0);
            arr = [];
            arr1 = [];
            ans = [];
            neg1 = 0;
            neg2 = 0;
          }
        }
      }
    }
    console.log(arr1);
  });

  $("#plus").on("click", function () {
    if (power === "on") {
      equalPressed = 0;
      if (neg1 == 1) {
        neg2 = 0;
        neg1 = 0;
        if (
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          console.log("soz");
        } else if (arr[arr.length - 1] !== "+") {
          $(".display-top").html("+");
          arr.push("+");
          ans.push(arr1);
          ans.push("+");
          arr1 = [];
          $(".display-bottom").html(arr.join(""));
          if (arr.length > 22 || arr1.length > 13) {
            $(".display-bottom").html("Digit Limit Met!");
            $(".display-top").html(0);
            arr = [];
            arr1 = [];
            ans = [];
            neg1 = 0;
            neg2 = 0;
          }
        }
      } else {
        if (
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          console.log("soz");
        } else if (arr[arr.length - 1] !== "+") {
          $(".display-top").html("+");
          arr.push("+");
          ans.push(arr1);
          ans.push("+");
          arr1 = [];
          $(".display-bottom").html(arr.join(""));
          if (arr.length > 22 || arr1.length > 13) {
            $(".display-bottom").html("Digit Limit Met!");
            $(".display-top").html(0);
            arr = [];
            arr1 = [];
            ans = [];
            neg1 = 0;
            neg2 = 0;
          }
        }
      }
    }
  });

  $("#minus").on("click", function () {
    if (power === "on") {
      equalPressed = 0;
      if (neg1 == 1) {
        neg2 = 0;
        neg1 = 0;
        if (
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          console.log("soz");
        } else if (arr[arr.length - 1] !== "-") {
          $(".display-top").html("-");
          arr.push("-");
          ans.push(arr1);
          ans.push("-");
          arr1 = [];
          $(".display-bottom").html(arr.join(""));
          if (arr.length > 22 || arr1.length > 13) {
            $(".display-bottom").html("Digit Limit Met!");
            $(".display-top").html(0);
            arr = [];
            arr1 = [];
            ans = [];
            neg1 = 0;
            neg2 = 0;
          }
        }
      } else {
        if (
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          console.log("soz");
        } else if (arr[arr.length - 1] !== "+") {
          $(".display-top").html("-");
          arr.push("-");
          ans.push(arr1);
          ans.push("-");
          arr1 = [];
          $(".display-bottom").html(arr.join(""));
          if (arr.length > 22 || arr1.length > 13) {
            $(".display-bottom").html("Digit Limit Met!");
            $(".display-top").html(0);
            arr = [];
            arr1 = [];
            ans = [];
            neg1 = 0;
            neg2 = 0;
          }
        }
      }
    }
  });

  $("#negative").on("click", function () {
    if (power === "on" && equalPressed == 0) {
      if (neg2 == 0 && arr.length !== 0) {
        neg2 = 1;
        neg1 = 1;
        if (
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          console.log("soz");
          neg1 = 0;
          neg2 = 0;
        } else if (arr1[0] !== 0) {
          arr1[0] = -1 * arr1[0];
          var neg = "(" + arr1.join("") + ")";
          $(".display-top").html("(" + arr1.join("") + ")");
          var len = arr1.length;
          for (i = 0; i < len; i++) {
            arr.pop();
          }
          arr.push(neg);
          $(".display-bottom").html(arr.join(""));
          console.log(arr);
        } else if (arr1[0] == 0 && arr1[1] == ".") {
          arr1.unshift("-");
          $(".display-top").html("(" + arr1.join("") + ")");
          var findZero = arr1.length - 1;
          console.log(findZero);
          arr.splice(-1 * findZero, 0, "-");
          $(".display-bottom").html(arr.join(""));
          console.log(arr1);
        }
      }

      if (arr.length == 22 || arr1.length > 13) {
        $(".display-bottom").html("Digit Limit Met!");
        $(".display-top").html(0);
        arr = [];
        arr1 = [];
        ans = [];
        neg = [];
        neg1 = 0;
        neg2 = 0;
      }
    }
  });

  $("#dot").on("click", function () {
    if (power === "on") {
      if (neg2 == 0 && equalPressed == 0) {
        if (
          arr.length == 0 ||
          arr[arr.length - 1] == "-" ||
          arr[arr.length - 1] == "&#215;" ||
          arr[arr.length - 1] == "&#247;" ||
          arr[arr.length - 1] == "+"
        ) {
          arr1.push(0);
          arr1.push(".");
          $(".display-top").html(arr1.join(""));
          arr.push(0);
          arr.push(".");
          $(".display-bottom").html(arr.join(""));
        } else if (arr[arr.length - 1] == "." || arr1.indexOf(".") !== -1) {
          console.log("soz");
        } else if (arr.length !== 0) {
          arr1.push(".");
          $(".display-top").html(arr1.join(""));
          arr.push(".");
          $(".display-bottom").html(arr.join(""));
        }

        if (arr.length > 22 || arr1.length > 13) {
          $(".display-bottom").html("Digit Limit Met!");
          $(".display-top").html(0);
          arr = [];
          arr1 = [];
          ans = [];
          neg1 = 0;
          neg2 = 0;
        }
      }
    }
  });

  $("#CE").on("click", function () {
    if (power === "on") {
      //ans.pop();
      if (ans.length == 0 || ans.length == 1) {
        arr = [];
        arr1 = [];
        ans = [];
        neg = [];
        neg1 = 0;
        neg2 = 0;
        equalPressed = 0;
        $(".display-top").html("0");
        $(".display-bottom").html("0");
      } else {
        var lol = [];
        for (i = 0; i < ans.length - 1; i++) {
          lol.push(ans[i]);
        }
        ans = [];
        ans = lol;
        arr = [];
        arr = steamrollArray(ans);
        $(".display-top").html("del");
        $(".display-bottom").html(arr.join(""));
      }
    }
  });

  $("#AC").on("click", function () {
    if (power === "on") {
      $(".display-top").html(0);
      $(".display-bottom").html(0);
      arr = [];
      arr1 = [];
      ans = [];
      neg1 = 0;
      neg2 = 0;
      equalPressed = 0;
    }
  });

  $("#equals").on("click", function () {
    if (
      power === "on" &&
      equalPressed == 0 &&
      ans.length !== 0 &&
      ans.length !== 1
    ) {
      equalPressed = 1;
      if (
        arr.length == 0 ||
        arr[arr.length - 1] == "-" ||
        arr[arr.length - 1] == "&#215;" ||
        arr[arr.length - 1] == "&#247;" ||
        arr[arr.length - 1] == "+"
      ) {
        console.log("soz1");
      } else {
        if (arr1.length !== 0) {
          ans.push(arr1);
        }
        var check12 = [];
        for (i = 0; i < ans.length; i++) {
          if (Array.isArray(ans[i]) === false) {
            check12.push(ans[i]);
          } else {
            if (ans[i].length !== 0) {
              check12.push(ans[i]);
            }
          }
        }
        ans = check12;

        // console.log(ans);
        // console.log(arr);
        // console.log(arr1);
        arr1 = [];

        function getAnswer(answer) {
          //         if(answer.length==1){

          //           return answer;
          //         }else{
          var noDiv = 0;
          var noMult = 0;
          var noAdd = 0;
          var noSubt = 0;

          for (i = 0; i < answer.length; i++) {
            if (answer[i] === "&#247;") {
              noDiv++;
            } else if (answer[i] === "x") {
              noMult++;
            } else if (answer[i] === "+") {
              noAdd++;
            } else if (answer[i] === "-") {
              noSubt++;
            }
          }

          var noCalc = noDiv + noMult + noAdd + noSubt;

          // console.log(noDiv);
          // console.log(noMult);
          // console.log(noAdd);
          // console.log(noSubt);
          for (i = 0; i < noCalc; i++) {
            if (answer[1] === "&#247;") {
              var bef = parseFloat(answer[0].join(""));
              var aft = parseFloat(answer[2].join(""));
              answer.splice(0, 3, [bef / aft]);
            } else if (answer[1] === "x") {
              var bef = parseFloat(answer[0].join(""));
              var aft = parseFloat(answer[2].join(""));
              answer.splice(0, 3, [bef * aft]);
            } else if (answer[1] === "+") {
              var bef = parseFloat(answer[0].join(""));
              var aft = parseFloat(answer[2].join(""));
              answer.splice(0, 3, [bef + aft]);
            } else if (answer[1] === "-") {
              var bef = parseFloat(answer[0].join(""));
              var aft = parseFloat(answer[2].join(""));
              answer.splice(0, 3, [bef - aft]);
            }
          }
          return answer;
        }
        console.log(getAnswer(ans));

        var answerF = getAnswer(ans);

        var roundDot = answerF[0][0].toString().split("").indexOf(".");

        if (roundDot !== -1) {
          if (answerF[0][0].toString().split("").length - (roundDot + 1) > 5) {
            answerF[0][0] = answerF[0][0].toFixed(5);
          }
        }

        if (answerF[0][0].toString().split("").length > 13) {
          $(".display-bottom").html("Digit Limit Met!");
          $(".display-top").html(0);
          arr = [];
          arr1 = [];
          ans = [];
          neg1 = 0;
          neg2 = 0;
        } else {
          //arr=[];
          arr1 = [];
          // arr.push(answerF[0][0]);

          console.log(answerF);

          if (answerF.length !== 1) {
            var len12 = answerF.length;
            for (i = 0; i < len12 - 1; i++) {
              answerF.pop();
            }
          }
          console.log(answerF);
          $(".display-top").html(answerF[0][0]);
          arr.push("=");
          arr.push(answerF[0][0]);
          var len56 = [];
          for (i = 0; i < arr.length; i++) {
            len56.push(arr[i].toString().split("").length);
          }
          var len78 = len56.reduce(function (x, y) {
            return x + y;
          });

          console.log(arr);
          if (len78 < 22) {
            $(".display-bottom").html(arr.join(""));
          } else {
            $(".display-bottom").html(arr[arr.length - 1]);
          }
          arr = [];
          arr.push(answerF[0][0]);
          //          console.log(ans);
          //           console.log(arr1);
          //           console.log(arr);

          // if(ans.indexOf("&#247")!==-1){
          //   var div = ans.indexOf("&#247");
          //   var bef = parseInt(ans[div-1].join(""));
          //   var aft = parseInt(ans[div+1].join(""));
          //   console.log(div);
          // }
          // var hi123 = ans.indexOf("&#247;");
          //    console.log(hi123);
        }
      }
    } else {
      console.log("nononono");
    }
    //  }
  });
});
