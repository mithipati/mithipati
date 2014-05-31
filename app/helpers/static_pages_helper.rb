module StaticPagesHelper
  def get_image(name)
    base_url = 'https://s3-us-west-1.amazonaws.com/mithipati/Portfolio/'
    name_length = name.length;
    if name[name_length - 1] == 'w'
      new_name = name + '.png'
    else
      new_name = name + '.jpg'
    end
    base_url += new_name
  end
end
