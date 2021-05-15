import React from 'react'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>
                    Be a dreamer and join our community!
               </h1>
                <form action="" className="main-form needs-validation">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label for="firstname">Firstname</label>
                                <input type="text" name="firstname" id="firstname" className="form-control" required/>
                                <div className="invalid-feedback">Please enter a valid first name!</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                    <label for="lastname">Lastname</label>
                                    <input type="text" name="lastname" id="lastname" className="form-control" required/>
                                    <div className="invalid-feedback">Please enter a valid last name!</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" className="form-control" required/>
                            <div className="invalid-feedback">Please enter a valid email.</div>
                    </div>
                    <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" required/>
                    </div>
                    <div className="form-group">
                            <label for="gender">Gender</label>
                            <select name="gender" id="gender" className="form-control">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                    </div>
                    <div className="form-check">
                            <input type="checkbox" id="accept-terms" className="form-check-input"/>
                            <label for="accept-terms" className="form-check-label">Accept Terms &amp; Conditions</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Header
