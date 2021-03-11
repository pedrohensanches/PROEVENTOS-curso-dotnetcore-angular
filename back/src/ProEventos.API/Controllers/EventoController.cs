using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public EventoController()
        {

        }

        [HttpGet]
        public string Get()
        {
            return "exemplo get";
        }

        [HttpPost]
        public string Post()
        {
            return "exemplo post";
        }
        
        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"exemplo put com id = {id}";
        }
        
        [HttpDelete("{id}")]
        public string Deleter(int id)
        {
            return $"exemplo delete com id = {id}";
        }
    }
}
