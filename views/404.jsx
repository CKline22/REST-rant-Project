const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Sorry we can't find this page</p>
                <div>
                    <img src="/images/stormtrooper-walking-desert.jpg" alt="stormtrooper lego walking in the desert"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@danielkcheung?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel K Cheung</a> on <a href="https://unsplash.com/s/photos/funny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404
