// // @ts-check
 const { test, expect } = require('@playwright/test');

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//  // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle("/Playwright/");
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
// // test.only("Verify if we enter correct credentials.user should be login", async ({page})=>{
// //   await page.goto("https://rahulshettyacademy.com/loginpagepractise/");
  
// // });
// test("Verify iframe",async ({page})=>{
//   await page.goto("https://letcode.in/frame");
//   const frame=page.frameLocator("#firstFr");
//   await frame.locator('[placeholder="Enter name"]').type("Arjun",{delay:100});
//   await frame.locator('[name="lname"]').type("Sharma",{delay:100})
//   const frame1=frame.frameLocator("iframe.has-background-white");
//   await frame1.locator('//input[@name="email"]').type("arjunshar4@gmail.com",{delay:100});
// });

// test("verify iframe using frame",async ({page})=>{
//   await page.goto("https://letcode.in/frame");
//   const frame1 =page.frame({name:"firstFr"});
//    if(frame1!= null){
//     await frame1.locator('[placeholder="Enter name"]').type("Arjun",{delay:100});
//     await frame1.locator('[name="lname"]').type("Sharma",{delay:100})
//    }
//    else{
//     console.log("frame is empty");
//    }
  //  const frame1=page.frame({class:"iframe.has-background-white"})
  //  if(frame1!=null){
  //   await frame1.locator('//input[@name="email"]').type("arjunshar4@gmail.com",{delay:100});
  //  }
  //  else{
  //   console.log("frame1 is empty")
  //  }
//   test("Verify frames",async ({page})=>{
//     await page.goto("https://letcode.in/frame");
//     const num_frame=page.frames();
//     console.log(num_frame);
//     })
// //})
// test("Verify if we enter the url we can go to the specified page",async ({browser})=>{
//   const NewWindow=await browser.newContext();// icognito page khul gaya//new context 
//   const NewTab=await NewWindow.newPage();//new tab 
//   await NewTab.goto("https://demo.automationtesting.in/Register.html");
// })
  
// test("verifying login page",async ({page})=>{
//   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//   await page.locator("#username").type("rahulshettyacademy",{delay:100});
//   await page.locator("#password").type("learning");
//   await page.locator("#signInBtn").click();
//  // await expect(page.locator('ProtoCommerce Home')).toContainText("")
//   await page.locator('(//button[@class="btn btn-info"])[1]').click();
//   await expect(page .locator('//a[contains(text(),"Checkout")]')).toBeVisible();
//   const Y= page.locator('//a[contains(text(),"Checkout")]');
//   await page.locator('//a[@class="nav-link btn btn-primary"]').click();
//   //await expect(page.locator('iphone X')).toBeVisible();
//   const X= page.locator('#exampleInputEmail1');
//   await expect(page.locator('//button[ @class="btn btn-danger"]')).toBeVisible();
//     await page.locator('button.btn.btn-success').click();
//     await expect(page.locator('#country')).toBeVisible();
//     await page.locator('#country').type("Pratapgarh",{delay:100});
//     await page.locator('//label[@for="checkbox2"]').click();
//     await page.locator('//input[@value="Purchase"]').click();
//     await expect(page.locator('div.alert.alert-success.alert-dismissible')).toBeVisible();
  
 
//})
// test("Verify SignUp Page", async ({page})=>{
//   await page.goto("https://demo.automationtesting.in/Register.html");
//   await page.locator('[placeholder="First Name"]').type("Arjun",{delay:100});
//   await page.locator('[placeholder="Last Name"]').type("Sharma",{delay:100});
//   await page.locator('[ng-model="Adress"]').type("jklm",{delay:100});
//   await page.locator('[ng-model="EmailAdress"]').type("arjun@gmail.com",{delay:100});
//   await page.locator('[ng-model="Phone"]').type("8299010996",{delay:100});
//   await page.locator('[value="Male" ]').click();
//   await page.locator('[value="Cricket" ]').click();
//   await page.locator('[value="Movies" ]').click();
//   await page.locator('[value="Hockey" ]').click();
//   await page.locator('//a[text()="English"]').click();
//   await page.locator('//option[@value="Adobe InDesign"]').click();
//   await page.locator('//li[text()="India"]').click();
//   await page.locator('//option[@value="1994"]').click();
//   await page.locator('//option[@value="May"]').click();
//   await page.locator('//option[@value="10"]').click();
//   await page.locator('#firstpassword').fill("New");
//   await page.locator('#secondpassword').fill("New");
//   await page.locator('#submitbtn').click();

// })

// test("Verify error message  by entering incorrect username and pasword ",async ({page})=>{
//   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//   await page.locator('#username').type("arjunshar4");
//   await page.locator('#password').type("helloji10");
//   await expect(page.locator('select.form-control')).toBeVisible("Student");
//   await page.locator('#terms').click();
//   await page.locator('#signInBtn').click();
//   await expect(page.locator('//div[contains(@style," block;")]')).toBeVisible();
// })

// test("verify correct username and password and user should able to login",async ({page})=>{
//   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//   await page.locator('#username').type("rahulshettyacademy",{delay:100});
//   await page.locator('#password').type("learning",{delay:100});
//   //const drop_down= page.locator('//select[@class="form-control"]').click();
//  // await expect(drop_down).click("Student");
//   await page.locator("#terms").click();
//   await page.locator("#signInBtn").click();
//   const check_out=page.locator("a.nav-link.btn.btn-primary");
//   await expect(check_out).toBeVisible();
// })
// test.only("verfiy blinking text",async ({page})=>{
//   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//   await expect(page.locator('[target="_blank"]')).toBeVisible();
// })

//import { test } from "@playwright/test";


// test("Download files", async ({ page }) => {

//     await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
//     await page.type("#textbox", "Like, Share, comment & subs");
//     await page.click("id=create")
//     const [download] = await Promise.all([
//         page.waitForEvent("download"),
//         page.click("id=link-to-download")
//     ])
//     const fileName = download.suggestedFilename()
//     await download.saveAs(fileName);
    

// })

// const data_driven=[{
//   name: "CompA",
//   manufacture:"Apple Inc."
// },
// {
//  name:"CompB",
//  manufacture:"IBM"
// },
// {
//   name:"CompC",
//   manufacture:"Nokia"
// },
// {
//   name:"CompD",
//   manufacture:"Sony"
// }
// ]
// for(const data of data_driven)
// {
//   test(`Parameterized test of ${data.name}`,async ({page}) => {
//     await page.goto("https://computer-database.gatling.io/computers/new");
//     await page.type("#name",data.name);
//     //await page.locator("#introduced").type("any");
//     await page.locator("#company").click();
//     await page.selectOption("#company",{ label: data.manufacture });
//     await page.locator('[value="Create this computer"]').click();
//     await expect(page.locator("div.alert-message.warning")).toBeVisible();
//   });
// }
// const computerData = [{
//   name: "Comp A",
//   manufacture: "Tandy Corporation"
// },
// {
//   name: "Comp B",
//   manufacture: "Commodore International"
// },
// {
//   name: "Comp C",
//   manufacture: "Thinking Machines"
// },
// {
//   name: "Comp D",
//   manufacture: "Nokia"
// }
// ]






// for (const data of computerData) {




//   test(`Parameterized test for ${data.name}` , async ({ page }) => {
//     await page.goto("https://computer-database.gatling.io/computers");
//     await page.click("#add");
//     await page.fill("#name", data.name);
//     await page.selectOption("#company", { label: data.manufacture });
//     await page.click("input[type='submit']");
//     await page.waitForLoadState("load");
//     await expect(page.locator(".alert-message.warning strong")).toContainText("Done");
//   });




// }
// test.only("Verify Login Page",async ({page})=>{
//  await page.goto("https://rahulshettyacademy.com/client");
//  await page.locator('#userEmail').fill("salonitiwary1999@gmail.com");
//  await page.locator('#userPassword').fill("Krishna@1");
//  await page.locator('#login').click()
//  await page.waitForLoadState("networkidle");
//  await page.locator('(//button[@class="btn w-10 rounded"])[1]').click();
//  await page.locator('(//button[@class="btn btn-custom"])[3]').click();
//  await page.locator('(//button[@class="btn btn-primary"])[3]').click();
//  await page.locator('[placeholder="Select Country"]').type("Ind",{delay:100});
// const SuggestionBox=await page.locator("section.ta-results.list-group.ng-star-inserted")
// const SelectCount=await SuggestionBox.locator("section.ta-results.list-group.ng-star-inserted").count();
//  for(let i=0;i<SelectCount;i++)
//  {
//      const text= await SuggestionBox.locator("button").nth(i).textContent();
//      if(text==="India"){
//       await SuggestionBox.locator("button").nth(i).click({delay:500});
//       break;
//      }
//  }

//  test.only("Verify cart Page",async ({page})=>{
//   await page.goto("https://rahulshettyacademy.com/client");
//   await page.locator('#userEmail').fill("salonitiwary1999@gmail.com");
//   await page.locator('#userPassword').fill("Krishna@1");
//   await page.locator('#login').click()
//   //await page.waitForLoadState("networkidle");
//   const cart= await page.locator("div.card-body");
//   const cart_no= await page.locator("div.card-body").count();
//   for(let i=0;i<cart_no;i++)
//   {
//    let text=await cart.locator("b").nth(i).textContent();
//   if(text==="adidas original"){
//     await cart.locator( "text=Add To Cart").nth(i).click({delay:5000});
//     console.log("find yes");
//     break;
//   }
// }
// })

// test("Verify Upload", async ({page}) =>{
// await page.goto("https://the-internet.herokuapp.com/upload")
// await page.setInputFiles('#file-upload',
//   'Screenshot 2023-04-26 231132.png',)
// await page.locator("#file-submit").click();
// await expect(page.locator("#uploaded-files")).toContainText("Screenshot 2023-04-26 231132.png");
// })

// test("Verify Multiple Uploads on the given URL", async ({page}) =>{
//   await page.goto("http://blueimp.github.io/jQuery-File-Upload/");
//   await page.setInputFiles('//input[@type="file"]',["Screenshot 2023-04-26 231132.png","Screenshot 2023-04-26 232708.png"]);
//   await page.click('//span[text()="Start upload"]');
//   await expect(page.locator('p.name').nth(0)).toHaveText("Screenshot 2023-04-26 231132.png");
//   await expect(page.locator('p.name').nth(1)).toHaveText("Screenshot 2023-04-26 232708.png");
// })

// test.only("Verify rmeoving Multiple Uploads", async ({page})=>{
// await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");
// //await page.click("#upload");
// await page.setInputFiles("#upload",["Screenshot 2023-04-26 231132.png","Screenshot 2023-04-26 232708.png"])
// await page.setInputFiles("#upload",[]);
// await expect(page.locator("#filename").nth(0)).toHaveText("o files");
// })

export class Locators {

constructor(page:Page){
  this.page=
  this.user= page.locator('#userEmail').fill("salonitiwary1999@gmail.com");
  this.password= page.locator('#userPassword').fill('Krishna@1');
  this.LoginButton= page.locator('#login').click();

}

async goTo(){
  await this.page.goto('https://rahulshettyacademy.com/client');
}
async Login({page}){

}
}


   // test.only("Verify Login Page",async ({page})=>{
//  await page.goto("https://rahulshettyacademy.com/client");
//  await page.locator('#userEmail').fill("salonitiwary1999@gmail.com");
//  await page.locator('#userPassword').fill("Krishna@1");
//  await page.locator('#login').click()
//  await page.waitForLoadState("networkidle");
//  await page.locator('(//button[@class="btn w-10 rounded"])[1]').click();
//  await page.locator('(//button[@class="btn btn-custom"])[3]').click();
//  await page.locator('(//button[@class="btn btn-primary"])[3]').click();
//  await page.locator('[placeholder="Select Country"]').type("Ind",{delay:100});
// const SuggestionBox=await page.locator("section.ta-results.list-group.ng-star-inserted")
// const SelectCount=await SuggestionBox.locator("section.ta-results.list-group.ng-star-inserted").count();
//  for(let i=0;i<SelectCount;i++)
//  {
//      const text= await SuggestionBox.locator("button").nth(i).textContent();
//      if(text==="India"){
//       await SuggestionBox.locator("button").nth(i).click({delay:500});
//       break;
//      }
//  }