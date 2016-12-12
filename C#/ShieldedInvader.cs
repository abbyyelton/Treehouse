using System;

namespace TreehouseDefense
{
    class ShieldedInvader : Invader
    {
      private static double _shieldStrength = 0.5;
      public override int Health { get; protected set; } = 2;
      
      public ShieldedInvader(Path path) : base(path)
      {
      }
      
      public override void DecreaseHealth(int factor)
        {
          if (Random.NextDouble() > _shieldStrength )
            base.DecreaseHealth(factor);
        }
    }
}