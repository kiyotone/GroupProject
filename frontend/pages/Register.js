import React from 'react'

function Regster() {
  return (
    <div className="">

<div class="outer-box">
        <div class="inner-box">
            <header class="signup-header">
                <h1>Signup</h1>
                <p>It just take 30 seconds</p>
            </header>

            <main class="signup-body">
                <form action="#">
                    <p><label for="fullname">Full Name</label>
                        <input type="text" name="FullName" id="fullname" placeholder="Ex.Dharmendra Singh Chaudhary"
                            required />
                    </p>

                    <p><label for="Email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Ex.drs51515@gmail.com" required />
                    </p>

                    <p><label for="Password">Password</label>
                        <input type="password" name="Password" id="Password" placeholder="At least 8 characters"
                            required />
                    </p>

                    <p>
                        <input type="submit" name="submit" id="submit" value="Create Account" />
                    </p>
                </form>
            </main>

            <footer class="signup-footer">
                <p>Already have an Account? <a href="#">link</a></p>
            </footer>


        </div>
    </div>
        
    </div>
  )
}

export default Regster