
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
const talkedRecently = new Set();
const mongoCurrency = require('discord-mongo-currency');


  

//   {
//  lvlimage: "",
//  difficulty: "",
//  correct: ""
// },



let guess = [

    // EASY LEVELS



  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920978907115716628/Screenshot_20211216-135337_VPS.png",
    difficulty: "Easy",
    correct: `FREE DEMON`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920978946705719296/Screenshot_20211216-135404_VPS.png",
    difficulty: "Easy",
    correct: `FLAME BURST`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920978979702337576/Screenshot_20211216-135431_VPS.png",
    difficulty: "Easy",
    correct: `AMONG US`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920979023474085898/Screenshot_20211216-140053_VPS.png",
    difficulty: "Easy",
    correct: `DASH CIRCLES`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920979429424005164/Screenshot_20211216-140245_VPS.png",
    difficulty: "Easy",
    correct: `QUWENCH`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949656471694606376/unknown.png",
    difficulty: "Easy",
    correct: `GOODMORNINGME`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949658540782526535/Screenshot_20220305-172341_VPS.png",
    difficulty: "Easy",
    correct: `BETA TEST ZERO`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949659485939564634/unknown.png",
    difficulty: "Easy",
    correct: `KINDNESS`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949660282526003220/Screenshot_20220305-173039_VPS.png",
    difficulty: "Easy",
    correct: `FIREWORKNT`
  },
  {
    lvlimage: "https://media.discordapp.net/attachments/825109835556192277/949979422746869760/Screenshot_20220306-143802_VPS.png",
    difficulty: "Easy",
    correct: "TICGDPS"
  },





  // MEDIUM LEVELS

  




  
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920980708133064754/Screenshot_20211216-140809_VPS.png",
    difficulty: "Medium",
    correct: `FIRE IN MY CLOSET`
  },
    {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949685476212740127/Screenshot_389.png",
    difficulty: "Medium",
    correct: `VOIDAL`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920983027369246760/Screenshot_20211216-141718_VPS.png",
    difficulty: "Medium",
    correct: `YE`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920982314392113222/Screenshot_20211216-141440_VPS.png",
    difficulty: "Medium",
    correct: `NARCISSIST`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920983314477760552/Screenshot_20211216-141836_VPS.png",
    difficulty: "Medium",
    correct: `SEXY LEVEL`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920983805207142470/Screenshot_20211216-142038_VPS.png",
    difficulty: "Medium",
    correct: `HOUND`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949657078321004584/Screenshot_20220305-171753_VPS.png",
    difficulty: "Medium",
    correct: `JUMPMAP12`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949657455904850020/Screenshot_20220305-171921_VPS.png",
    difficulty: "Medium",
    correct: `RULE34`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949657861099761664/unknown.png",
    difficulty: "Medium",
    correct: "SILQUE"
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949658871830548540/unknown.png",
    difficulty: "Medium",
    correct: `JEBAITED`
  },
  {
    lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949670762405589052/Screenshot_20220305-180233_VPS.png",
    difficulty: "Medium",
    correct: `UNNAMED 199`
  },
  {
lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949708353272164362/Screenshot_414.png",
difficulty: "Medium",
correct: "SHITPOST 4"
  },


  {
    lvlimage: "https://cdn.discordapp.com/attachments/974003654686289930/974004072837419028/Screenshot_1482.png",
     difficulty: "Hard",
     correct: 'EVERY PLANET IS DEAD'
    },
   {
    lvlimage: "https://cdn.discordapp.com/attachments/974003654686289930/974004577215070228/Screenshot_1483.png",
     difficulty: "Hard",
     correct: 'RESIN'
    },
   {
    lvlimage: "https://cdn.discordapp.com/attachments/974003654686289930/974004840273440818/Screenshot_1484.png",
     difficulty: "Hard",
     correct: 'PLASMA INFERNAL II'
    },
   {
    lvlimage: "https://cdn.discordapp.com/attachments/974003654686289930/974007920545136730/Screenshot_1485.png",
     difficulty: "Easy",
     correct: 'DESOLATION'
    },
   {
    lvlimage: "https://cdn.discordapp.com/attachments/974003654686289930/974008511082151966/Screenshot_1486.png",
     difficulty: "Easy",
     correct: 'SKRYPTICAL'
    },
   {
    lvlimage: "https://cdn.discordapp.com/attachments/974003654686289930/974008945540743178/Screenshot_1488.png",
     difficulty: "Easy",
     correct: 'WELCOME'
    },
    {
      lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974012575803125891/Screenshot_1489.png",
       difficulty: "Medium",
       correct: 'UNNAMED II'
      }, 
      {
        lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974017277257195560/Screenshot_1490.png",
         difficulty: "Easy",
         correct: 'THE END'
        }, {
        lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974017789335576616/Screenshot_1491.png",
         difficulty: "Medium",
         correct: 'FART'
        },



  // HARD LEVELS





  
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920984043326165032/Screenshot_20211216-142131_VPS.png",
    difficulty: "Hard",
    correct: `ULTRAVIOLET`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920984345903251496/Screenshot_20211216-142240_VPS.png",
    difficulty: "Hard",
    correct: `FLOATING BEER`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920984576753549312/Screenshot_20211216-142341_VPS.png",
    difficulty: "Hard",
    correct: `MANIA`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/920985050638581800/Screenshot_20211216-142529_VPS.png",
    difficulty: "Hard",
    correct: `RHINESTONE EYES`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949656552820834355/Screenshot_20220305-171527_VPS.png",
    difficulty: "Hard",
    correct: `UNNAMED 64`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949657901620949092/Screenshot_20220305-172112_VPS.png",
    difficulty: "Hard",
    correct: `SEX`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949657997666287706/unknown.png",
    difficulty: "Hard",
    correct: `XMAS NIGHT`
  },
  {
    lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949672490676936784/Screenshot_20220305-181913_VPS.png",
    difficulty: "Hard",
    correct: `COINS`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949687406586642452/unknown.png",
    difficulty: "Easy",
    correct: `DSIS`
  },
{
  lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949686328054911076/Screenshot_391.png",
  difficulty: "Hard",
  correct: `UNNAMED 200`
},
{
  lvlimage: "https://media.discordapp.net/attachments/877976113241006101/949738763846840350/Screenshot_20220305_194218.jpg",
  difficulty: "Hard",
  correct: "CAT VIBING TO DOLOS"
},
{
  lvlimage: "https://cdn.discordapp.com/attachments/877976113241006101/949729977576865802/20220305150735_1.jpg",
  difficulty: "Hard",
  correct: "XDISS CHALLENGE"
},
{
  lvlimage: "https://media.discordapp.net/attachments/877976113241006101/949729562013597696/Screenshot_20220305_190532.jpg",
  difficulty: "Hard",
  correct: "THE FIELDS"
}, 
{
  lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949749537952628857/Screenshot_453.png",
  difficulty: "Hard",
  correct: "HELL"
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949707909577723985/Screenshot_20220305_173948.jpg",
  difficulty: "Hard",
  correct: "NATIONAL SOCIALISM"
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949712873238724638/Screenshot_425.png",
  difficulty: "Hard",
  correct: `BRUH`
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949713546810372146/Screenshot_426.png",
  difficulty: "Hard",
  correct: `TIME MACHINE`
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949714128845553684/Screenshot_427.png",
  difficulty: "Impossible",
  correct: `VOLUTO`
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949714392692449400/Screenshot_428.png",
  difficulty: "Hard",
  correct: `GINSENG`
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949714530211102780/Screenshot_429.png",
  difficulty: "Impossible",
  correct: `WSC`
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949714763917705236/Screenshot_430.png",
  difficulty: "Impossible",
  correct: `CV`
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949725495526826034/Screenshot_441.png",
  difficulty: "Impossible",
  correct: `SEMZAIY SEX TAPE`
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949717389380030514/Screenshot_436.png",
  difficulty: "Easy",
  correct: `DEMITE CIRCLES`
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949746877811785728/Screenshot_447.png",
  difficulty: "Easy",
  correct: `A MONSTROUS WALK`
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949747323498553414/Screenshot_448.png",
  difficulty: "Medium",
  correct: "DREADNAUGHT"
},

{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949747473805619231/Screenshot_449.png",
  difficulty: "Hard",
  correct: "CAVE"
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949973593687748678/unknown.png",
  difficulty: "Impossible",
  correct: "ULTRAVL"
},
{
  lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949973717667168276/unknown.png",
  difficulty: "Impossible",
  correct: "GLOW TYPE BEAT"
},
{
  lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949973415853457468/Screenshot_961.png",
  difficulty: "Impossible",
  correct: "SHORT EXPERIENCE"
},
{
  lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949973845186576395/unknown.png",
  difficulty: "Hard",
  correct: "MINT"
},
{
  lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949973215906771024/unknown.png",
  difficulty: "Hard",
  correct: "WAVES"
},
{
  lvlimage: "https://cdn.discordapp.com/attachments/949734334720528434/950031942307430420/Screenshot_20220306-220626.png",
  difficulty: "Hard",
  correct: "Dancc"
},
{
  lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949974239547641856/unknown.png",
  difficulty: "Impossible",
  correct: "A BURNING MEMORY"
},
{
  lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949974470385360906/unknown.png",
  difficulty: "Hard",
  correct: "LEVEL NAME"
},
{
  lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974018309769023499/Screenshot_1492.png",
   difficulty: "Hard",
   correct: 'DEADLY WAVE'
  },
 {
  lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974018616066465792/Screenshot_1493.png",
   difficulty: "Medium",
   correct: 'HYDRO SHADOWS'
  },{
    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974019196721725491/Screenshot_1494.png",
     difficulty: "Easy",
     correct: 'The Great Wall'
    },
    {
      lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974019798113595412/Screenshot_1495.png",
       difficulty: "Medium",
       correct: 'CAVE OF SOULS'
      },{
        lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974020183771459674/Screenshot_1496.png",
         difficulty: "Hard",
         correct: 'DEATHANGEL'
        },
       {
        lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974020480723980338/Screenshot_1497.png",
         difficulty: "Hard",
         correct: 'WAVE CHALLENGE CIRCLES'
        },
       {
        lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974020876293001226/Screenshot_1498.png",
         difficulty: "Impossible",
         correct: 'POX'
        }, 
       {
        lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974021102965780520/Screenshot_1499.png",
         difficulty: "Impossible",
         correct: 'EPHEMERAL'
        },
       {
        lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974021518919090176/Screenshot_1500.png",
         difficulty: "Hard",
         correct: 'WORK'
        },
       {
        lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974022095799480390/Screenshot_1503.png",
         difficulty: "Impossible",
         correct: 'KAY WHY ESS'
        },
       {
        lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974022353841430628/Screenshot_1504.png",
         difficulty: "Medium",
         correct: 'BASS DROP'
        },
        {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974022761511026789/Screenshot_1505.png",
           difficulty: "Hard",
           correct: 'HAVOC PLUS'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974023115115999322/Screenshot_1506.png",
           difficulty: "Easy",
           correct: 'HAVOC'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974023548400193677/Screenshot_1507.png",
           difficulty: "Medium",
           correct: 'WEIRD CAVERNS'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974023816814674051/Screenshot_1508.png",
           difficulty: "Impossible",
           correct: 'GALAX'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974024218104725625/Screenshot_1510.png",
           difficulty: "Medium",
           correct: 'CLUBSTEP'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974024847300632576/Screenshot_1512.png",
           difficulty: "Medium",
           correct: 'SHITPOSTS 2'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974025183100809276/Screenshot_1513.png",
           difficulty: "Easy",
           correct: 'OF GOD'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974025468137328750/Screenshot_1514.png",
           difficulty: "Easy",
           correct: 'BASE NOCLIP LIBRARY'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974025783679004713/Screenshot_1515.png",
           difficulty: "Easy",
           correct: 'COINS'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974026067172012043/Screenshot_1516.png",
           difficulty: "Medium",
           correct: 'STENOPHYLLA'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974026484018741248/Screenshot_1517.png",
           difficulty: "Easy",
           correct: 'THE LAST DANCE'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974026878270713896/Screenshot_1519.png",
           difficulty: "Easy",
           correct: 'XMAS SPECIAL EP'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974027257674875001/Screenshot_1520.png",
           difficulty: "Easy",
           correct: 'PANZERKNIGHT'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974028162562420796/Screenshot_1521.png",
           difficulty: "Easy",
           correct: 'QUWENCH'
          },
         {
          lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974030507346104360/Screenshot_1522.png",
           difficulty: "Hard",
           correct: 'CODE CIRCLES'
          },
          {
            lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974034177894785064/Screenshot_1523.png",
             difficulty: "Impossible",
             correct: 'CUM CAVERN'
            },
            {
              lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974034534582616164/Screenshot_1524.png",
               difficulty: "Impossible",
               correct: 'EASY LEVEL'
              },
              {
                lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974797804088205342/Screenshot_1532.png",
                 difficulty: "Impossible",
                 correct: 'CRAZYMAN'
                },
               {
                lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974798778538278912/Screenshot_1534.png",
                 difficulty: "Medium",
                 correct: 'UNNAMED III'
                },
               {
                lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974798993685086268/Screenshot_1535.png",
                 difficulty: "Hard",
                 correct: 'PLASMA INFERNAL'
                },
               {
                lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974799497622331412/Screenshot_1536.png",
                 difficulty: "Easy",
                 correct: 'NYCTOPHOBIA'
                }, 
               {
                lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974799732436267059/Screenshot_1537.png",
                 difficulty: "Medium",
                 correct: 'BLOOM'
                },
               {
                lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974800083591757874/Screenshot_1538.png",
                 difficulty: "Impossible",
                 correct: 'WHENW'
                },
               {
                lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974800364320718908/Screenshot_1531.png",
                 difficulty: "Hard",
                 correct: '12'
                },
               {
                lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974801319967739914/Screenshot_1539.png",
                 difficulty: "Hard",
                 correct: 'PLASMA INFERNAL IV'
                },{
                  lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/974802874456481812/Screenshot_1540.png",
                   difficulty: "Hard",
                   correct: '28'
                  },
                  {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976522457240457286/Screenshot_1588.png",
                     difficulty: "Medium",
                     correct: 'BLAZEN'
                    },
                   {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976523148470145084/Screenshot_1589.png",
                     difficulty: "Easy",
                     correct: 'DASH CIRCLEX'
                    },
                   {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976523497293635634/Screenshot_1590.png",
                     difficulty: "Easy",
                     correct: 'FACTORY'
                    },
                   {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976523804589326376/Screenshot_1591.png",
                     difficulty: "Easy",
                     correct: 'TROLL FACE LOL'
                    },
                   {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976524040644726824/Screenshot_1592.png",
                     difficulty: "Medium",
                     correct: 'FREE MOD'
                    },
                   {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976524253467901982/Screenshot_1593.png",
                     difficulty: "Medium",
                     correct: 'RACEMOSA'
                    },
                   {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976525131956514896/Screenshot_1594.png",
                     difficulty: "Hard",
                     correct: 'COPPER GOD'
                    },
                   {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976525422630146049/Screenshot_1595.png",
                     difficulty: "Medium",
                     correct: 'LEAN LIMITED EDITION'
                    },
                   {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976525721201688576/Screenshot_1596.png",
                     difficulty: "Medium",
                     correct: 'SWAGGA'
                    },
                   {
                    lvlimage: "https://cdn.discordapp.com/attachments/974009225254694922/976526502411767868/Screenshot_1597.png",
                     difficulty: "Hard",
                     correct: 'VOID'
                    },
  // IMPOSSIBLE LEVELS




  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949655350607482910/Screenshot_20220305-170852_VPS.png",
    difficulty: "Impossible",
    correct: `FREE DEMON`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949655473630634074/Screenshot_20220305-171050_VPS.png",
    difficulty: "Impossible",
    correct: `40000`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949655983637008414/unknown.png",
    difficulty: "Impossible",
    correct: `MANGOROENSIS`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949656295680655360/Screenshot_20220305-171429_VPS.png",
    difficulty: "Impossible",
    correct: `OUT THE SNOW`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949657122910650398/Screenshot_20220305-171717_VPS.png",
    difficulty: "Impossible",
    correct: `SVFFER`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949657279068770414/unknown.png",
    difficulty: "Impossible",
    correct: `SWAMP HAZE`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705031077203978/unknown.png",
    difficulty: "Impossible",
    correct: `MXDUSA`
  },
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705093631070268/unknown.png",
    difficulty: "Impossible",
    correct: `ABSENCE OF REALITY`
  },
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705193568747620/unknown.png",
    difficulty: "Hard",
    correct: `MEDUSA`
  },
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705243392876564/unknown.png",
    difficulty: "Hard",
    correct: `F L O A T I N G`
  },
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705425270493274/unknown.png",
    difficulty: "Impossible",
    correct: `NEAR`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705274401378374/unknown.png",
    difficulty: "Impossible",
    correct: `SHEBEEL DATING SIM 1`
  },
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705492668751902/unknown.png",
    difficulty: "Hard",
    correct: `FROST`
  },
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705536297898015/unknown.png",
    difficulty: "Impossible",
    correct: `STRAIN`
  },
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705703738708038/unknown.png",
    difficulty: "Impossible",
    correct: `COCK TRIAL`
  },
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949705844000444496/unknown.png",
    difficulty: "Hard",
    correct: `PARAPLEGIC SPIDERMAN`
  },
 
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949706454678515822/unknown.png",
    difficulty: "Impossible",
    correct: `VPS IS DYING`
  },
 
{
    lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949706469044019321/unknown.png",
    difficulty: "Hard",
    correct: `IF SHE PLAYS ROBLOX`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949658200397979688/unknown.png",
    difficulty: "Impossible",
    correct: `SLY RACE`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949660672554328074/unknown.png",
    difficulty: "Impossible",
    correct: `FINAL DESTINY`
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/920975442343788554/949661164751712327/unknown.png",
    difficulty: "Impossible",
    correct: `SUMYOYA TURQOUISE`
  },
  {
    lvlimage: "https://media.discordapp.net/attachments/949670646814761060/949672155325538314/Screenshot_20220305-181751_VPS.png",
    difficulty: "Impossible",
    correct: `THE DOOM`
  },
  {
    lvlimage: "https://media.discordapp.net/attachments/825109835556192277/949736806600048780/unknown.png",
    difficulty: "impossible",
    correct: "DAILY WAVE III"
  },
  {
    lvlimage: "https://cdn.discordapp.com/attachments/898024405987373086/949750845522706442/IMG_3546.png",
    difficulty: "impossible",
    correct: "SWEAT ACCORDINGLY"
  },
{
lvlimage: "https://cdn.discordapp.com/attachments/949670646814761060/949710331654070363/Screenshot_420.png",
difficulty: "Impossible",
correct:"LOL"
},
]


module.exports = {
  name: "guess",
  aliases : ['g'],
  category : 'sparky',

  description: "Get to play a VPS Version of Sparky.",
  run: async (client, message, args) => {


    if (talkedRecently.has(message.author.id)) {
      const Embed1 = new MessageEmbed()
      .setTitle("<a:discordloading:929108406734815342> Please wait 5 seconds before playing again..")
      .setColor(`WHITE`)
       message.channel.send(Embed1)  
} else {
  let q = guess[Math.floor(Math.random()*(guess.length))];

    let i = 0;

    const Embed = new MessageEmbed()
    .setTitle("Guess the level!")
    .setDescription(`Difficulty: ${q.difficulty}`)
    .addField('IMPORTANT', 'the person who plays, is the only one who can answer his' )
    .setImage(q.lvlimage)
    .setColor(`GREEN`)
    .setFooter(`Requested by ${message.author.tag} | Provided time : 15 Seconds`)
message.channel.send(Embed)

let gd = m => m.author.id === message.author.id;

message.channel.awaitMessages(gd, {
    max: 1,
    time: 15000,
    errors: ['time']
  })
  .then(message => {
    message = message.first()
    if (message.content.toUpperCase() == q.correct) {



//get points based on all the difficulties with

//get points based on all the difficulties with
if (q.difficulty == "Easy") {
  let pointsez = Math.floor(Math.random() * (10 - 1) + 1);
  const Embed1 = new MessageEmbed()
  .setTitle("✅ Correct!")
  .setDescription(`You've earned ${pointsez} points! Play again using v?q`)
  .setColor(`WHITE`)
   message.channel.send(Embed1)   
  mongoCurrency.giveCoins(message.member.id, message.guild.id, pointsez);

} else if (q.difficulty == "Medium") {
  let pointsmedi = Math.floor(Math.random() * (20 - 10) + 10);
  const Embed2 = new MessageEmbed()
  .setTitle("✅ Correct!")
  .setDescription(`You've earned ${pointsmedi} points! Play again using v?q`)
  .setColor(`WHITE`)
    message.channel.send(Embed2)
  mongoCurrency.giveCoins(message.member.id, message.guild.id, pointsmedi);
  
} else if (q.difficulty == "Hard") {
  let pointshard = Math.floor(Math.random() * (30 - 20) + 20);
  const Embed3 = new MessageEmbed()
  .setTitle("✅ Correct!")
  .setDescription(`You've earned ${pointshard} points! Play again using v?q`)
  .setColor(`WHITE`)
    message.channel.send(Embed3)
  mongoCurrency.giveCoins(message.member.id, message.guild.id, pointshard);

  } else if (q.difficulty == "Impossible") {
  let pointsimp = Math.floor(Math.random() * (40 - 30) + 30);
  const Embed4 = new MessageEmbed()
  .setTitle("✅ Correct!")
  .setDescription(`You've earned ${pointsimp} points! Play again using v?q`)
  .setColor(`WHITE`)
    message.channel.send(Embed4)
  mongoCurrency.giveCoins(message.member.id, message.guild.id, pointsimp);

  }

           
          } else {
            const Embed5 = new MessageEmbed()
            .setTitle("❌ Wrong!")
            .setDescription(`Better luck next time! Play again using v?g`)
            .setColor(`WHITE`)
            message.channel.send(Embed5)
          }
  })
  .catch(collected => {

    const Embed6 = new MessageEmbed()
    .setTitle("❌ Time's up!")
    .setDescription(`Better luck next time! Play again using v?g`)
    .setColor(`WHITE`)
    message.channel.send(Embed6)

  })
  // add to the set to check if they've talked in the last minute
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);

  }, 5000);

  }

}
};
