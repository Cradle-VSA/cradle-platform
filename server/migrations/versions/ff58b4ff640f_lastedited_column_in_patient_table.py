"""lastEdited column in patient table

Revision ID: ff58b4ff640f
Revises: 5df0e66fee22
Create Date: 2020-07-07 22:17:12.837786

"""
from alembic import op
import sqlalchemy as sa
from time import time


# Adds last edit timestamp to the patient table. For existing rows, the last edited time
# is set to now: i.e., the time when the database migration is performed. While this may
# not be ideal, it is better than having the last edited time being way back in 1970.


# revision identifiers, used by Alembic.
revision = "ff58b4ff640f"
down_revision = "5df0e66fee22"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("patient", sa.Column("lastEdited", sa.BigInteger(), nullable=False))
    op.execute(f"UPDATE patient SET lastEdited = {int(time())}")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("patient", "lastEdited")
    # ### end Alembic commands ###
