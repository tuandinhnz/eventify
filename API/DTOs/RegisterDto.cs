using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        public string Email { get; set; }
        
        [Required]
        //The password must contain at least one lowercase character, one uppercase and one number.
        //The password also must contain at least for 4 characters and has a maximum length of 8
        [RegularExpression("(?=.*\\d)(?=.*\\[a-z])(?=.*[A-Z]).{4,8}", ErrorMessage = "Password must be complex")]
        public string Password { get; set; }
        
        [Required]
        public string Username { get; set; }
    }
}