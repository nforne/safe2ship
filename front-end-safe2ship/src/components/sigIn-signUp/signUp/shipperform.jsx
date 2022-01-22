import React from "react";

export default function Shippersignup(props) {
   
 
   return (
    <div className="userform">
        
      <form onSubmit={'handleSubmit'}>
        <fieldset>

        <p>
        <label for="input">Names:</label>
        <input type="text" name='name' value={'value'} onChange={'(e) => setName(e.target.value)'}/>
        </p>

        <p>
          <label for="phone">Phone:</label>
          <input type="text" name='phone' id="phone" placeholder="phone +2374302560"/>
        </p>
        <p>
          <label for="email">Email:</label>
          <input type="email" name='email' id="email" placeholder="test@example.com"/>
        </p>
        
        <p>
          <label for="password">Password:</label>
          <input type="password" name='password' id="password" placeholder="x42x58s5d4s898"/>
        </p>
        
        <p>
          <label for="photo">Photo:</label>
          <input type="file" name='photo' id="photo" placeholder="./photo/diretctory/orURL"/>
        </p>
        
        <p>
          <label for="address">Address:</label>
          <input type="text" name='address' id="input" placeholder="210 Steeles Av W, Brampton ON, CA"/>
        </p>
        
        <p>
          <label for="number_of_orders">Number_of_orders:</label>
          <input type="number" name='number_of_orders' value={0} id="input" placeholder="2" disabled ={'true'}/>
        </p>
        
        <p>
          <label for="number_of_packages">Number_of_packages:</label>
          <input type="number" name='number_of_packages' value={0} id="input" placeholder="2" disabled ={'true'}/>
        </p>
        
        <p>
          <label for="rating_sum">Rating_sum:</label>
          <input type="number" name='rating_sum' value={0} id="rating_sum" placeholder="2" disabled ={'true'}/>
        </p>
        
        <p>
          <label for="bio">Bio:</label>
          <input type="text" name='bio' value={0} id="bio" placeholder="I am not a conventional person and ..." />
        </p>
        
        <p>
          <label for="ccard_info">ccard_info:</label>
          <input type="button" name='ccard_info' value={'{js Object}'} id="ccard_info" onChange={'(e) => setName(e.target.value)'} />
        </p>
        
        <p>
          <label for="company_infomation">Company_infomation:</label>
          <input type="button" name='company_infomation' value={'{js Object}'} onChange={'(e) => setName(e.target.value)'} id="company_infomation" />
        </p>
        
        <p>
          <label for="driving_record">Driving_record:</label>
          <input type="button" name='driving_record' value={'{js Object}'} onChange={'(e) => setName(e.target.value)'} id="company_infomation" />
        </p>

        <p>
          <label for="photo_id">PhotoID:</label>
          <input type="file" name='photo_id' id="photo_id" value={'{js Object}'} placeholder="uploade one file of both faces. Clear copies!"/>
        </p>
        
        <p>
          <label for="status">Status:</label>
          <input type="text" name='status' id="status" value={'shipper'} placeholder="shipper or customer"/>
        </p>
        
        <p>
          <label for="total_declined">Total_declined:</label>
          <input type="number" name='total_declined' id="total_declined" value={0} placeholder="0"/>
        </p>
        
        <p>
          <label for="system_id">System_id:</label>
          <input type="text" name='system_id' id="system_id" value={'text'} placeholder="nks545w8AA"/>
        </p>        
        
        <p>
          <label for="web_link">Web_link:</label>
          <input type="url" name='web_link' id="web_link" value={'text'} placeholder="www.example.ca"/>
        </p>
        
        
        <p>
          <label for="messages">Messages:</label>
          <input type="url" name='messages' id="messages" value={'{js Object}'} placeholder="this is the text"/>
        </p>
        
        <p>
          <label for="work_schedule">Work_schedule:</label>
          <input type="url" name='work_schedule' id="work_schedule" value={'{js Object}'} placeholder="click to enter your swork schedule. Optional!"/>
        </p>

      </fieldset>
          <label for="formSubmitButton">Sign-Up</label>
          <input type="submit" name="formSubmitButton" value={'value'} onClick={'(e) => setName(e.target.value)'}/>
  </form>
        
    </div>
   );
 }