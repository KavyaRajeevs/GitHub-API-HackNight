function resume(){
  const username = document.getElementById("gname").value;
  if (username) {
                $.ajax({
                        url: '/user_data',
                        type: 'GET',
                        data: { username: username },
                        success: function(data) {
                            var userInfoDiv = $('#userInfo');
                            userInfoDiv.empty();
                            
                            if (data.error) {
                                userInfoDiv.html('<p>Error: ' + data.error + '</p>');
                            } else {
                                userInfoDiv.html(
                                    `<h2>${data.name}</h2>
                                    <p><strong>Username:</strong> ${data.login}</p>
                                    <p><strong>Bio:</strong> ${data.bio || 'N/A'}</p>
                                    <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
                                    <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                                    <p><strong>Followers:</strong> ${data.followers}</p>
                                    <p><strong>Following:</strong> ${data.following}</p>
                                    <p><strong>Profile URL:</strong> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>`
                                );
                            }
                        },
                        error: function(xhr, status, error) {
                            $('#userInfo').html('<p>Error: ' + error + '</p>');
                        }
                    });
                } else {
                    $('#userInfo').html('<p>Please enter a username.</p>');
                }
          
  
  
}
