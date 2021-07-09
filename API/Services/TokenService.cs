using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Domain;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class TokenService
    {
        private readonly IConfiguration _config;

        public TokenService(IConfiguration config)
        {
            _config = config;
        }

        public string CreateToken(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Email, user.Email),
            };
            
            /* Sign the token using a key. This key will be stored on the server and never leave the server.
            We will temporary use the 'super secret key' in the development mode. This will be replaced by
            a long and random key in the production mode.*/
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["TokenKey"]));
            
            /* Create credentials for our token */
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            
            /* Describe the token. Tell the token about the claims and how long the token will last.
             Later on we will look into a more advanced topic which is refresh token so we can reduce
             the amount of time before the token expires and when the client logins into our application,
             it will automatically refresh the token */    
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = credentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        } 
    }
}