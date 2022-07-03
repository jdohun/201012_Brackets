var test1 = 0;
var arg1 = 0;
var arg2 = 0;

function test()
{
    test1(arg1,arg2);
}

function song(verse,section)
{
    if(document.querySelector(section).classList.contains(verse))
        {
            if(document.querySelector(section).classList.contains("anim"))
            {
                if(document.querySelector(section).classList.contains("textcolor"))
                {
                    document.querySelector(section).classList.toggle(verse);
                    document.querySelector(section).classList.toggle("anim");
                    document.querySelector(section).classList.toggle("textcolor");
                }
                else
                {
                    document.querySelector(section).classList.toggle("textcolor");
                }    
            }
            else
            {
                document.querySelector(section).classList.toggle("anim");
            }
        }
    else
    {
        document.querySelector(section).classList.toggle(verse);
    }
}