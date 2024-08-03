function resume(){
  const username = document.getElementById("gname").value;
  if (username) {
                fetch(`/user_data?username=${encodeURIComponent(username)}`)
                    .then(response => response.json())
                    .then(data => {
                        var userInfoDiv = document.getElementById('userInfo');
                        userInfoDiv.innerHTML = '';

                        if (data.error) {
                            userInfoDiv.innerHTML = `<p>Error: ${data.error}</p>`;
                        } else {
                            userInfoDiv.innerHTML = `
                                <h2>${data.name}</h2>
                                <p><strong>Username:</strong> ${data.login}</p>
                                <p><strong>Bio:</strong> ${data.bio || 'N/A'}</p>
                                <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
                                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                                <p><strong>Followers:</strong> ${data.followers}</p>
                                <p><strong>Following:</strong> ${data.following}</p>
                                <p><strong>Profile URL:</strong> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
                            `;
                        }
                    })
                    .catch(error => {
                        document.getElementById('userInfo').innerHTML = `<p>Error: ${error.message}</p>`;
                    });
            } else {
                document.getElementById('userInfo').innerHTML = '<p>Please enter a username.</p>';
            }
  
  
}
