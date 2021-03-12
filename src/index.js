module.exports = function toReadable(number = 0) {
    if (number == 0) return "zero";

    let arr = String(number).split("");
    arr.reverse();
    let len = arr.length;
    let str = "";

    for (i = 0; i < len; i++) {
        switch (i) {
            case 0:
                str = num(arr[i]);
                break;
            case 1:
                let k1 = +arr[1];
                switch (k1) {
                    case 0:
                        break;
                    case 1:
                        let n = +arr[0];

                        switch (n) {
                            case 0:
                                str = "ten";
                                break;
                            case 1:
                                str = "eleven";
                                break;
                            case 2:
                                str = "twelve";
                                break;
                            case 3:
                                str = "thirteen";
                                break;
                            case 4:
                                str = "fourteen";
                                break;
                            case 5:
                                str = "fifteen";
                                break;
                            case 6:
                                str = "sixteen";
                                break;
                            case 7:
                                str = "seventeen";
                                break;
                            case 8:
                                str = "eighteen";
                                break;
                            case 9:
                                str = "nineteen";
                                break;

                            default:
                                break;
                        }
                        break;

                    case 2:
                        str = "twenty " + str;
                        break;
                    case 3:
                        str = "thirty " + str;
                        break;
                    case 4:
                        str = "forty " + str;
                        break;
                    case 5:
                        str = "fifty " + str;
                        break;
                    case 6:
                        str = "sixty " + str;
                        break;
                    case 7:
                        str = "seventy " + str;
                        break;
                    case 8:
                        str = "eighty " + str;
                        break;
                    case 9:
                        str = "ninety " + str;
                        break;

                    default:
                        break;
                }
                break;


            case 2:
                str = num(arr[i]) + " hundred " + str;
                break;

            case 3:
                str = num(arr[i]) + " thousand " + str;
                break;

            default:
                break;
        }
    }

    console.log(number, str);
    str = str.trim();
    return str;

    function num(num1) {
        switch (+num1) {
            case 0:
                return "";
                break;
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            case 4:
                return "four";
                break;
            case 5:
                return "five";
                break;
            case 6:
                return "six";
                break;
            case 7:
                return "seven";
                break;
            case 8:
                return "eight";
                break;
            case 9:
                return "nine";
                break;

            default:
                break;
        }
    }


}

